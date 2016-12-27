<link rel=stylesheet href="/Stream1/css/style.css">			


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
$sql = "SELECT start_date, end_date, location, status FROM schedule ORDER by start_date";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
	//output data of each row on db
	while($row = $result->fetch_assoc()) {
		if ($row["status"] == "confirmed") {
			echo "<img src='/Stream1/images/images/confirmed.png' alt='confirmed' class='imgicon'>";
		} else {
			echo "<img src='/Stream1/images/images/prebooked.png' alt='prebooked' class='imgicon'>";
		}
		echo "Show: from " . $row["start_date"]. "  to  " . $row["end_date"].  " - Location: " . $row["location"]. " " . "<br>"; 
	}
} else {
	echo "0 results";
}
$conn->close();

?> 
