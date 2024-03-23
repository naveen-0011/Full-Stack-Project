<?php
$servername = "localhost";
$username = "root";
$password = ""; // Password for your MySQL server
$dbname = "registration.sql"; // Name of your MySQL database

// Create connection
$conn = new mysqli("localhost", "root", "", "registration");

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    // Prepare SQL statement for insertion
    $stmt = $conn->prepare("INSERT INTO registration (name, degree, department, shift, aadhaar, account_no, ifsc_code, parent_account_no, parent_ifsc_code, whatsapp_no, distance, signature) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    // Example data (replace with actual data from registration form)
    $Name = "Naveen";
    $Degree = "Bachelor's Degree";
    $Department = "Computer Science";
    $Shift = 1;
    $Aadhaar = "123456789012";
    $StdAcno = "1234567890";
    $StdIfsc = "IFSC1234";
    $ParentAcno = "0987654321";
    $ParentIfsc = "IFSC5678";
    $WhatsappNo = "1234567890";
    $Distance = 105;
    $Signature = "path/to/signature.jpg";

    // Binding parameters
    $stmt->bind_param("sssiisssssds", $Name, $Degree, $Department, $Shift, $Aadhaar, $StdAcno, $StdIfsc, $ParentAcno, $ParentIfsc, $WhatsappNo, $Distance, $Signature);

    // Execute statement
    $result = $stmt->execute();

    if ($result) {
        echo "Registration Successful...";
    } else {
        echo "Error: " . $conn->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>
