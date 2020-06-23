<?php
require 'PHPMailer-master/PHPMailerAutoload.php';
error_reporting(E_ALL & ~E_NOTICE);
//данные отправителя
$fromEmail = 'relpy@avihai-ins.co.il';
$fromName = 'Website contact form';

//данные получателя письма
//$sendToEmail = 'adam@convertix.co.il';
$sendToEmail = 'adam@convertix.co.il';
$sendToName = 'Adam Joseph';

//тема письма
$subject = 'New message from the contact form on your site';

//смтп доступы
$smtpHost = 'avihai-ins.co.il';
$smtpUsername = 'relpy@avihai-ins.co.il';
$smtpPassword = 'fH9jRP23332523&ncX23';
$smtpPort = 465;
$smtpEncryption = 'ssl';

//поля твоей формы
$fields = array(
    'user_name' => 'Name',
    'user_age' => 'User Age',
    'user_insurance' => 'User Insurance',
    'user_insurance-payment' => 'User Insurance Payment',
    'user_residence' => 'User Residence',
    'user_phone' => 'Phone',
);
$okMessage = $_POST['user_name'];

$errorMessage = 'There was an error while submitting the form. Please try again later';
try {
    if (count($_POST) == 0) {
        throw new \Exception('Form is empty');
    }

    /**
     * Email html template
     */
    $emailTextHtml = "<h1>You have a new message from your contact form</h1><hr>";
    $emailTextHtml .= "<table>";

    foreach ($_POST as $key => $value) {
        if (isset($fields[$key])) {
            if ($key == "user_phone") {
                $prefix = $_POST['user_phone-prefix'];
                $emailTextHtml .= "<tr><th>$fields[$key]:</th><td>$value$prefix</td></tr>";
            } else {
                $emailTextHtml .= "<tr><th>$fields[$key]:</th><td>$value</td></tr>";
            }
        }
    }
    $emailTextHtml .= "</table><hr>";
    /**
     * END - Email html template
     */

    $mail = new PHPMailer;

    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($sendToEmail, $sendToName); // you can add more addresses by simply adding another line with $mail->addAddress();

    $mail->isHTML(true);

    $mail->Subject = $subject;
    $mail->Body = $emailTextHtml;
    $mail->msgHTML($emailTextHtml); // this will also create a plain-text version of the HTML email, very handy


    $mail->isSMTP();
    $mail->CharSet = 'UTF-8';
    $mail->SMTPDebug = 0;
    $mail->Debugoutput = 'html';
    $mail->Host = $smtpHost;
    $mail->Port = $smtpPort;
    $mail->SMTPSecure = $smtpEncryption;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;

    if (! $mail->send()) {
        throw new \Exception('I could not send the email.' . $mail->ErrorInfo);
    }

    response(array(
        'type' => 'success',
        'message' => $okMessage,
    ));
} catch (\Exception $e) {
    response(array(
        'type' => 'danger',
        'message' => $e->getMessage(),
    ));
}

function response($responseArray)
{
    if (! empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
        $encoded = json_encode($responseArray);

        header('Content-Type: application/json');

        echo $encoded;
    } else {
        echo $responseArray['message'];
    }
}
