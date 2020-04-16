<?php

// fGrid, 2log.
$min_f = 0;
$max_f = 9;
$default_f = 4;

$f = (isset($_GET['f']) AND intval($_GET['f']) >= $min_f AND intval($_GET['f']) <= $max_f) ? intval($_GET['f']) : $default_f;

$size = pow(2, $f);

$img = imagecreatetruecolor($size, $size);

imagefill($img, 0, 0, 0);


$room = $size;
$supermax = floor(log($room, 2));
//echo $supermax;exit;
$h = 0;
$y = 0;

while($room > 0)
{
    $max = floor(log($room, 2));
    $pow = mt_rand($min_f, $supermax);
    //echo $pow . '<br>';
    $h = pow(2, $pow);
    $c = imagecolorallocate($img, mt_rand(0, 255), mt_rand(0, 255), mt_rand(0, 255));
    imagefilledrectangle($img, 0, $y, $size - 1, $h - 1, $c);
    $y += $h;
    $room -= $h;
}
//exit;


header('Content-Type: image/png');
imagepng($img);
if(isset($_GET['save'])) imagepng($img, $_GET['save']);
imagedestroy($img);
