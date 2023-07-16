<?php
// display error
error_reporting(E_ALL);
ini_set('display_errors', 1);

$productName = $_POST['productName'];
$productPrice = $_POST['productPrice'];

$orderText = $productName . ", " . $productPrice . "\n";;
$file = fopen('orders.txt', 'a');
fputs($file, $orderText);
fclose($file);
?>