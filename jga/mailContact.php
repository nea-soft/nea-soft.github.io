<?php
if (isset($_POST['contactFormName'])) {$contactFormName = $_POST['contactFormName'];}
if (isset($_POST['contactFormEmail'])) {$contactFormEmail = $_POST['contactFormEmail'];}
if (isset($_POST['contactFormMsg'])) {$contactFormMsg = $_POST['contactFormMsg'];}

$to = "jodhpurguideassociation@gmail.com";
$subject = "Message from the site";
$message = "Sender name: ".$contactFormName."
    \r\n Sender e-mail: ".$contactFormEmail."
    \r\n Text of the letter: ".$contactFormMsg;
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers = 'From: Jodhpur Guide Association <jodhpurguideassociation@gmail.com>' . "\r\n" .
           'Reply-To: <'.$contactFormEmail.'>';
$headers .= "Organization: Jodhpur Guide Association\r\n";
$headers .= "X-Priority: 3\r\n";
$send = mail ($to, $subject, $message, $headers);
if ($send == 'true')
{ echo json_encode(array('result')); }
else { echo json_encode(array('result')); }
