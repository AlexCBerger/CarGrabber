<?php
	session_start();
	setcookie('email', '', time() - 42000);
	setcookie('password', '', time() - 42000);
	setcookie('username', '', time() - 42000);

	// Finally, destroy the session.
	session_destroy();
?>