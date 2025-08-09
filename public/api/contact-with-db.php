<?php
// Database configuration
$servername = "localhost";
$username = "your_db_username";
$password = "your_db_password";
$dbname = "your_database_name";

try {
    $pdo = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Insert into database
    $stmt = $pdo->prepare("INSERT INTO contact_submissions (name, email, dimensions, clarity, shapes, message, submitted_at) VALUES (?, ?, ?, ?, ?, ?, NOW())");
    $stmt->execute([$name, $email, $dimensions, $clarity, $shapes, $message]);
    
    // Send email (same as above)
    // ... email code here ...
    
} catch(PDOException $e) {
    error_log("Database error: " . $e->getMessage());
    // Continue with email sending even if database fails
}
?>
