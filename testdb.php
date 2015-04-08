<?php
	include("../secure/database.php");
	conn = pg_connect(HOST." ".DBNAME." ".USERNAME." ".PASSWORD) or die('Could not connect: ' . pg_last_error());
	if($conn)
		echo("It would appear that we have a connection here\n");
?>
