<?php 
$name=$_POST['name'];
$phone=$_POST['phone'];
$form = $_POST['form-popup'];
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
//$mail->SMTPDebug = 3;                               // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'lokosov12@inbox.ru';                 // SMTP username
$mail->Password = '199818pht';                           // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
$mail->setFrom('lokosov12@inbox.ru');
$mail->addAddress('fenixmeb45@yandex.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Заявка на перетяжку! Вика ответь ля!';
$mail->Body    = 'Имя отправителя: '.$name. '<br>'.
				 'Телефон отправителя: '.$phone. '<br> <br>'.
				 'Надо просто рассчитать стоимость по виберу или воцупу'
;
$mail->AltBody = 'Это сообщение в формате plain text';
if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
	header('location: thanks.html');
}
?>