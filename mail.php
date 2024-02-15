<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader


$err=["name"=>"","email"=>"","subject"=>"","content"=>""];
$name='';
$subject='';
$email='';
$content='';
$success='';
function sn(){
global $err,$name,$subject,$email,$content,$success;
if (isset($_POST['submit'])) {

    if (empty($_POST['name'])) {
        $err['name']="The Name Field Is Required";
     return false;
    }else{

        $name=esc($_POST['name']);
    }

    if (empty($_POST['subject'])) {
        $err['subject']="The Subject Field Is Required";
     return false;
    }else{

        $subject=esc($_POST['subject']);
    }

    if (empty($_POST['content'])) {
        $err['content']="The Content Field Is Required";
     return false;
    }else{

        $content=esc($_POST['content']);
    }


    if (filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)) {
        $email=esc($_POST['email']);
    }else{
        $err['email']="The Email Field Must Be Valid";
        return false;
    }




    require_once ('mailer/vendor/autoload.php');

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

$mail->SMTPDebug = 0;
$mail->Debugoutput = 'error_log';  // Send debug output to PHP error log


    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'okoloemeka37@gmail.com';                     //SMTP username
    $mail->Password   = "ecaa tiqa faio urti";                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('okoloemeka37@gmail.com', 'Mailer');
    $mail->addAddress('okoloemeka47@gmail.com','Zyler');     //Add a recipient

    $mail->addReplyTo($email, $name);
 


    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $subject;

    $template=file_get_contents("temp.html");

    $template=str_replace("[content]",$content,$template);
    $template=str_replace("[name]",$name,$template);
    $template=str_replace("[email]",$email,$template);

    $mail->Body    = $template;
   

    $mail->send();
    $success="Message Sent Successfully";
   
    
} 

}




function esc($val) {
    return htmlspecialchars(strip_tags(stripcslashes($val)));
}

sn();
?>