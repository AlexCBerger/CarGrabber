<?php
	session_start();
	
	include("database.php");
	
	$postdata = file_get_contents("php://input");
    	$request = json_decode($postdata);
    	$iniemail = $request->email;
    	$inipassword = $request->password;

	 $dbconn = pg_connect(HOST. " ".DBNAME." ".USERNAME." ".PASSWORD) or die('Could not connect: ' . pg_last_error());

	 $email = htmlspecialchars($iniemail);
         $password = htmlspecialchars($inipassword);

	pg_prepare($dbconn, "auth", 'SELECT username, salt, password_hash FROM user_info WHERE email = $1');
        $result = pg_execute($dbconn, "auth", array($email));

	 $row = pg_fetch_assoc($result); 
	 $localhash = sha1( intval($row['salt']) . $password);
	 if ($localhash == $row['password_hash']) {
		 
		 if(!isset($_SESSION['username'])) {
			$_SESSION['username'] = $row['username'];
			setcookie('username', $row['username']);
		} else {

		}
		 echo json_encode($_SESSION);

	 } else {
		 echo 0 ; 
	 }

   	

   	?>
