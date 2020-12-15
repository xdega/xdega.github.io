<?php
$email_address = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

// Check for empty fields
if (
    empty($_POST['name'])          ||
    empty($_POST['email'])         ||
    empty($_POST['phone'])         ||
    empty($_POST['message'])    ||
    !$email_address
) {
    echo "No arguments Provided!";
    return false;
}

$name = $_POST['name'];
if ($email_address === FALSE) {
    echo 'Invalid email';
    exit(1);
}
$phone = $_POST['phone'];
$message = $_POST['message'];

if (empty($_POST['_gotcha'])) {
    // Create the email and send the message
    $to = 'contact@liamhockley.me';
    $email_subject = "Website Contact Form: $name";
    $email_body = "You have received a new message from your website contact form.\n\n";
    $email_body .= "Here are the details:\n\nName: $name\n\nEmail: $email_address\n\n";
    $email_body .= "Phone: $phone\n\nMessage:\n$message";
    $headers = "From: noreply@liamhockley.me\n";
    $headers .= "Reply-To: $email_address";
    mail($to, $email_subject, $email_body, $headers);
    return true;
}
echo "Gotcha, spambot!";
return false;
