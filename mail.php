<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $mail = $_POST['mail'] ?? '';
    $skype = $_POST['skype'] ?? '';
    $theme = $_POST['theme'] ?? '';
    $text = $_POST['text'] ?? '';

    $to = "borodin.ek@gmail.com";
    $subject = "Сообщение с сайта";
    $message = "Имя пославшего: ".$name."
        \n E-mail пославшего: ".$mail."
        \n Skype пославшего: ".$skype."
        \n Theme пославшего: ".$theme."
        \n Текст письма: ".$text;
    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: Сайт-заглушка <'.$mail.'>';

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(array('result' => 'Ваше сообщение успешно отправлено'));
    } else {
        echo json_encode(array('result' => 'Ошибка. Сообщение не отправлено!'));
    }
} else {
    http_response_code(405);
    echo json_encode(array('result' => 'Метод не поддерживается'));
}
