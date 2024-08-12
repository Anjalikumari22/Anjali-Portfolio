<?php
// contact.php
if (server["REQUEST METHOD"]=="POST")
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Set up email parameters
$to = 'nam,anjalikumari@gmail.com'; // Replace with your email address
$subject = 'Contact Us Form Submission';
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

// Create email body
$email_body = "<html><body>";
$email_body .= "<h2>Contact Us Form Submission</h2>";
$email_body .= "<p><strong>Name:</strong> $name</p>";
$email_body .= "<p><strong>Email:</strong> $email</p>";
$email_body .= "<p><strong>Message:</strong><br>$message</p>";
$email_body .= "</body></html>";

// Send email
if (mail($to, $subject, $email_body, $headers)) {
    echo 'Thank you for your message. We will get back to you soon.';
} else {
    echo 'Sorry, something went wrong. Please try again later.';
}
?>
