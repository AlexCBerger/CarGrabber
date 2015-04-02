<?php
	session_start();

	
	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $username = $request->username;
    $email = $request->email;
    $password = $request->password;
   

    //todo
    //store the data

    $_SESSION['username'] = $username;
    $_SESSION['email'] = $email;
    $_SESSION['password'] = $password;

    setcookie('email', $email);
    setcookie('password', $password);
    setcookie('username', $username);

    //setcookie(username)
     echo json_encode($_SESSION);
?>