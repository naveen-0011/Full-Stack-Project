<?php
$servername = "localhost";
$username = "root";
$password = ""; // Your password here, if any
$dbname = "registration";

// Create connection
$conn = mysqli_connect("localhost", "root", "", "registration");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// If connection is successful, you can proceed with your database operations

// For example, you can perform an SQL query to fetch data from a table:
$sql = "SELECT * FROM your_table_name";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // Output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "id: " . $row["id"]. " - Name: " . $row["Name"]. " - Degree: " . $row["Degree"]. "<br>";
    }
} else {
    echo "0 results";
}

// Close connection
mysqli_close($conn);
?>
