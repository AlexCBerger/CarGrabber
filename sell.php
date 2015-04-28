<?php
	include("database.php");
	session_start();
	$postdata = file_get_contents("php://input");
    
	$request = json_decode($postdata);


	// here is the data
    	$manufacturer = htmlspecialchars($request->manufacturer);
	$year = htmlspecialchars($request->year);
	$make = htmlspecialchars($request->make);
	$model = htmlspecialchars($request->model);
	$price = htmlspecialchars($request->price);
	
	//above 3 could be empty
	$state = htmlspecialchars($request->state);
	$city = htmlspecialchars($request->city);
	$description = htmlspecialchars($request->description);
	$username = $_SESSION['username'];
	
	// then you might just insert them into tables or what...
	// and maybe there could be some evaluation for the data

	// If you insert successfully, it will go back to the home page, and you could check in the database to see if really insert successfully

	// and I might implement some feedback for selling successfully  later.
	


	//for testing purpose, doesn't matters
	$arr = array($manufacturer, $year, $make,  $model, $price, $state, $city ,  $description, $username);
	echo json_encode($arr);

?>
