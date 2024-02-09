<?php
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$mensaje = $_POST['mensaje'];

$message = "Este mensaje fue enviado por: " . $nombre . " \r\n";
$message .= "Su e-mail es: " . $correo . " \r\n";
$message .= "Mensaje: " . $mensaje . " \r\n";

$success = mail('saulodavidcid@gmail.com', 'Mensaje de cliente a Saulo Cid Dev', $message);
if (!$success) {
    $errorMessage = error_get_last()['message'];
    echo "Error al enviar el correo: " . $errorMessage;
}