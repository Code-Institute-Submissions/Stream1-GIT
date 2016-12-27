<?php
$servername = "localhost";
$username = "username";
$password = "password";
$my_db = "name_db";
// Create connection
$conn = new mysqli($servername, $username, $password, $my_db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
//create variables
$name = $_POST["name"];
$email = $_POST["email"];
//email variables

$to = $email;
$subject = "Newsletter from Monkees Band";
$txt = "You have been successfully added to our Newsletter";
$headers = "From: aline@alinechaves.com";

//save on database
$sql = "INSERT INTO mail_list (name, email)
VALUES ('".$name."','".$email."')";
if ($conn->query($sql) === TRUE) {
	mail($to,$subject,$txt,$headers);
    header('Location: http://www.alinechaves.com/Stream1/#/home');
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>