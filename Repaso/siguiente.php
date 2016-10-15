<?php
$nombre = $_POST["name"]; //No se utiliza el id del input, sino que se utiliza el campo name.
$matricula = $_POST["studentNumber"];
$edad = $_POST["age"];

$mensaje = "Nombre: ".$nombre."\n"."Matrícula: ".$matricula."\n"."Edad: ".$edad."\n"; //El punto sirve para concatenar, y la n y diagonal invertida es para salto de línea
$email_to = "A00512873@itesm.mx";
$email_subject = "Mensaje Prueba DAP";

$email_headers = "From: ana_teresa30@hotmai.com"."\r\n"."Reply-To: ana_teresa30@hotmail.com"."\r\n"."X-Mailer: PHP/".phpversion(); //muestra de quien viene el correo electrónico y a quien le vas a responder, tambien se concantena con las versiones de php que se está utilizando

@mail($email_to, $email_subject, $mensaje, $email_headers);
    
?>