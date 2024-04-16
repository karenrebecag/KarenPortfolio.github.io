<?php
$servername = "localhost";
$username = "";
$password = "";
$dbname = "mydatabase";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Recibir datos del formulario
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$country = $_POST['country'];
$phoneNumber = $_POST['phoneNumber'];
$message = $_POST['message'];

// Insertar datos en la base de datos
$sql = "INSERT INTO contacts (firstName, lastName, email, country, phoneNumber, message)
VALUES ('$firstName', '$lastName', '$email', '$country', '$phoneNumber', '$message')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>