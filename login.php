<?php

	//tan's comment

	session_start();

	$postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $email = $request->email;
    $password = $request->password;

    if(!isset($_SESSION['email']) || !isset($_SESSION['password'])) {
    	$_SESSION['email'] = $email;
    	$_SESSION['password'] = $password;
 		setcookie('email', $email);
 		setcookie('password', $password);

        //assume getting the username asd
        $_SESSION['username'] = $email;
        setcookie('username', $email);
    } else {

    }

    echo json_encode($_SESSION);
?>
