<?php
	session_start();

	if(isset($_SESSION['email'])) {
		echo json_encode($_SESSION);
	} else {
		echo 0;
	}
?>