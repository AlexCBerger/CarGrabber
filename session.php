<?php
	session_start();

	if(isset($_SESSION['username'])) {
		echo json_encode($_SESSION);
	} else {
		echo 0;
	}
?>