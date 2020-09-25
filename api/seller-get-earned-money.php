
<?php
    include_once 'database.php';

    $database = new Database();
    $conn = $database->getConnection();

    $sellerId = $_GET['id'];

    $sql = "SELECT SUM(quantity * unit_price) AS balance
            FROM orders o INNER JOIN items i ON (o.item_id = i.id)
            WHERE i.seller_id = '$sellerId'";

    $result = $conn->query($sql);
    $r = mysqli_fetch_assoc($result);

    $balance = 0;
    if ($r["balance"] > 0)
        $balance = $r["balance"]; // Avoid null.


    print "{\"balance\":$balance}";

    $conn->close();
?>