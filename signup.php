<?php

    include("database.php");
	session_start();

	
	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $iniusername = $request->username;
    $iniemail = $request->email;
    $inipassword = $request->password;
   

    //todo
    //store the data

    //$_SESSION['username'] = $iniusername;
    //setcookie('username', $iniusername);

    $dbconn = pg_connect(HOST. " ".DBNAME." ".USERNAME." ".PASSWORD) or die('Could not connect: ' . pg_last_error());
    // $result = pg_prepare($dbconn, "signup", 'INSERT INTO user_info () VALUES ()') or die("failed ". pg_last_error()) ;

    
        $username = htmlspecialchars($iniusername);
        $plain_password = htmlspecialchars($inipassword);
        $email = htmlspecialchars($iniemail);
        
         mt_srand();         
         $salt = mt_rand();
         $password = sha1($salt . $plain_password);
        

         // $ipaddr = $_SERVER['REMOTE_ADDR'];
         // $action = 'Register';

         pg_prepare($dbconn, "check", "SELECT * FROM user_info WHERE username = $1");
         $result = pg_execute($dbconn, "check", array($username));
         $rows = pg_num_rows($result);

         if($rows == 0) {

             pg_prepare($dbconn, "register_auth", 'INSERT INTO user_info (username, password_hash, salt, email) VALUES ($1, $2, $3, $4)');
                         $result = pg_execute($dbconn, "register_auth", array($username, $password, $salt, $email));
          
             $_SESSION['username'] = $username; 
             setcookie('username', $username);
		echo json_encode($_SESSION);
         } else {
             echo 0; 
         }
        
?>
