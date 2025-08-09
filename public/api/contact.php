<?php
// Enable error reporting for debugging (remove in production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set headers
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Get form data
$name = isset($_POST['name']) ? trim($_POST['name']) : '';
$email = isset($_POST['email']) ? trim($_POST['email']) : '';
$dimensions = isset($_POST['dimensions']) ? trim($_POST['dimensions']) : '';
$clarity = isset($_POST['clarity']) ? trim($_POST['clarity']) : '';
$shapes = isset($_POST['shapes']) ? trim($_POST['shapes']) : '';
$message = isset($_POST['message']) ? trim($_POST['message']) : '';

// Validate required fields
if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email, and message are required']);
    exit;
}

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
$email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
$dimensions = htmlspecialchars($dimensions, ENT_QUOTES, 'UTF-8');
$clarity = htmlspecialchars($clarity, ENT_QUOTES, 'UTF-8');
$shapes = htmlspecialchars($shapes, ENT_QUOTES, 'UTF-8');
$message = htmlspecialchars($message, ENT_QUOTES, 'UTF-8');

// Email configuration - CHANGE THESE TO YOUR ACTUAL EMAIL
$to = 'barakaminingmi4@gmail.com';  // Your email address
$subject = 'New Contact Form Submission - Baraka Mining';

// Create email body
$email_body = "New contact form submission from Baraka Mining website:\n\n";
$email_body .= "Name: " . $name . "\n";
$email_body .= "Email: " . $email . "\n";
$email_body .= "Phone: " . (isset($_POST['phone']) ? $_POST['phone'] : 'Not provided') . "\n";
$email_body .= "Dimensions: " . $dimensions . "\n";
$email_body .= "Clarity: " . $clarity . "\n";
$email_body .= "Shapes: " . $shapes . "\n";
$email_body .= "Message: " . $message . "\n\n";
$email_body .= "Submitted on: " . date('Y-m-d H:i:s') . "\n";
$email_body .= "IP Address: " . $_SERVER['REMOTE_ADDR'] . "\n";

// Email headers
$headers = "From: noreply@barakaminingltd.co.ke\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Try to send email
$mail_sent = mail($to, $subject, $email_body, $headers);

if ($mail_sent) {
    // Log successful submission
    $log_entry = date('Y-m-d H:i:s') . " - SUCCESS: Email sent from " . $name . " (" . $email . ")\n";
    file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    http_response_code(200);
    echo json_encode([
        'success' => true, 
        'message' => 'Thank you for your inquiry! We will get back to you within 24 hours.'
    ]);
} else {
    // Log failed submission
    $log_entry = date('Y-m-d H:i:s') . " - ERROR: Failed to send email from " . $name . " (" . $email . ")\n";
    file_put_contents('contact_log.txt', $log_entry, FILE_APPEND | LOCK_EX);
    
    http_response_code(500);
    echo json_encode([
        'error' => 'Failed to send message. Please try again later or contact us directly.',
        'debug' => 'Mail function returned false'
    ]);
}
?>
