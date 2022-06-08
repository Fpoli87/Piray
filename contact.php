<?php 
	$nombre = $_POST['contactName'];
	$email = $_POST['email'];
	$asunto = $_POST['comments'];

	$header = 'From: ' . $mail . " \r\n";
	$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
	$header .= "Mime-Version: 1.0 \r\n";
	$header .= "Content-Type: text/plain";

	$message = "Este mensaje fue enviado por: " . $name . " \r\n";
	$message .= "Su Email es: " . $email . " \r\n";
	$message .= "Mensaje: " . $_POST['comments'] . " \r\n"
	$message .= "Enviado el: " . date('d/m/Y', time());

	$para = 'info@pirayvaleriadelmar.com';
	$asunto = 'Cosulta desde Pirayvaleriadelmar.com'

	mail($para, $asunto, utf8_decode($message), $header);
	
	header("Location:index.html");
 ?>