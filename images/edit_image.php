<?php
session_start();
include('connection.php');
$filename=$_SESSION['filename'];
$filepath='temp/'.$filename;
if(@$_POST['submit']=='Edit')
{
$x1=$_POST['x1'];
$y1=$_POST['y1'];
$x2=$_POST['x2'];
$y2=$_POST['y2'];
$im = imagecreatefromjpeg($filepath);
$white = imagecolorallocate($im, 255, 255, 255);
imagefilledrectangle($im, $x1, $y1, $x2, $y2, $white);
$create="./".$filepath;
imagejpeg($im,$create);
//echo "<img src='$create'>";
$email=$_SESSION['email'];
$insert_link="insert into `$database_name`.`temp` (`id`, `path`,`button`,`email`) values(NULL,'$create','\'\'','$email')";
mysql_query($insert_link);
imagedestroy($im);
header('location:upload.php');
}
else if($_POST['save']=='Save')
{$confirm_code=rand(100,100000000);
	if (copy("temp/$filename","images/$confirm_code.$filename")) 
  {
  unlink("temp/$filename");
  $email=$_SESSION['email'];
  $blogg="New Pay Slip Uploaded";
  $timezone = new DateTimeZone("Asia/Kolkata" );
  $date = new DateTime();
  $date->setTimezone($timezone );
  $TIME=$date->format('F j, Y, g:i a');
  $insert_link="insert into `$database_name`.`pay_slips` (`id`, `image_path`,`email`) values(NULL,'images/$confirm_code.$filename','$email')";
  mysql_query($insert_link);
  $insert_link1="insert into `$database_name`.`activity` (`id`, `date`,`blogg`,`email`) values(NULL,'$TIME','$blogg','$email')";
  mysql_query($insert_link1);
  $_SESSION['msg']="The Pay Slip is Uploaded Successfully";
  header('location:upload.php');
}}?>