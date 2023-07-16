<?php
// display error
error_reporting(E_ALL);
ini_set('display_errors', 1);

$orders = file('orders.txt');
$counter = 1;

foreach ($orders as $order) {
    $orderData = explode(',', $order);
    $productName = isset($orderData[0]) ? trim($orderData[0]) : '';
    $productPrice = isset($orderData[1]) ? trim($orderData[1]) : '';
    $productPrice /= 1000;

    echo '<tr>';
    echo '<td>' . $counter . '</td>';
    echo '<td>' . $productName . '</td>';
    echo '<td>' . 'Rp. ' . $productPrice . '.000,-' . '</td>';
    echo '</tr>';

    $total += $productPrice;
    $counter++;
}

echo '<tr>';
echo '<td><a href="public/pages/delete.php"><img width="16" height="16" src="public/images/trash.png"alt="trash-icon"/></a></td>';
echo '<td><b>Harga Total</b></td>';
echo '<td><b>' . 'Rp. ' . $total . '.000,-' . '</b></td>';
echo '</tr>';

?>