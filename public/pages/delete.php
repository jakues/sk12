<?php
// display error
error_reporting(E_ALL);
ini_set('display_errors', 1);

$file = fopen('orders.txt', 'w');
fwrite($file, "");
fclose($file);
header('Location: ../../index.html');
exit;
?>