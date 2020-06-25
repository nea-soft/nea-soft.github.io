<?php
if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['number'])) {$number = $_POST['number'];}
if (isset($_POST['mail'])) {$mail = $_POST['mail'];}
if (isset($_POST['text'])) {$text = $_POST['text'];}

$to = "bylbawka2410@gmail.com"; /*Укажите ваш адрес электоронной почты*/
$headers = 'From: bylbawka2410@gmail.com' . "\r\n".
    'Content-type: text/plain; charset = utf-8';
$subject = "Granit Galichina";
$message = "Ім'я відправника: ".$name.";\nТелефоний номер відправника: ".$number.";\nE-mail відправника: ".$mail.";\nТекст листа: ".$text.".";
$send = mail ($to, $subject, $message, $headers);
if ($send == 'true')
{
    echo json_encode(array('result' => 'Ваше повідомленно успішно відправлено!\nДякуємо.'));
}
else
{
    echo json_encode(array('result' => 'Ууупс. Схоже виникла помилка :( .\nПовідомлення не відправлене. Спробуйте ще раз. Та уважно перевірте усю інформацію.'));
}