<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['mail'])) {$mail = $_POST['mail'];}
if (isset($_POST['skype'])) {$skype = $_POST['skype'];}
if (isset($_POST['theme'])) {$theme = $_POST['theme'];}
if (isset($_POST['text'])) {$text = $_POST['text'];}

$to = "borodin.ek@gmail.com"; /*Укажите ваш адрес электронной почты*/
$subject = "Сообщение с сайта";
$message = "Имя пославшего: ".$name."
    \n E-mail пославшего: ".$mail."
    \n Skype пославшего: ".$skype."
    \n Theme пославшего: ".$theme."
    \n Текст письма: ".$text;
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers = 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers = 'From: Cайт-заглушка <'.$mail.'>';
$send = mail ($to, $subject, $message, $headers);
if ($send == 'true')
{
echo json_encode(array('result' => 'Ваше сообщение успешно отправлено'));
}
else
{
echo json_encode(array('result' => 'Ошибка. Сообщение не отправлено!'));
}
