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
$start_date = $_POST["start_date"];
$end_date = $_POST["end_date"];
$location = $_POST["location"];

//save on database
$sql = "INSERT INTO schedule (name, email, start_date, end_date, location)
VALUES ('".$name."','".$email."','".$start_date."','".$end_date."','".$location."')";
if ($conn->query($sql) === TRUE) {
    header('Location: http://www.alinechaves.com/Stream1/#/schedule');
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>