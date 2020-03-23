<?php
if (isset($_POST['guideMsg_7'])) {$guideMsg_7 = $_POST['guideMsg_7'];}

$to = "jodhpurguideassociation@gmail.com";
$subject = "Message from the site";
$message = "Message: ".$guideMsg_7;
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers = 'From: Jodhpur Guide Association <bjodhpurguideassociation@gmail.com>'."\r\n";
$headers .= "X-Priority: 3\r\n";
$headers .= "Organization: Jodhpur Guide Association\r\n";
$send = mail ($to, $subject, $message, $headers);
if ($send == 'true')
{ echo json_encode(array('result')); }
else
{ echo json_encode(array('result')); }
