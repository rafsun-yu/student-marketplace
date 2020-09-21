
<?php
    include_once 'database.php';

    $database = new Database();
    $conn = $database->getConnection();

    $sql = "SELECT s.id as seller_id, s.name as seller_name, i.id as item_id, title, description as 'desc', category, image_url, price
    FROM users s INNER JOIN items i ON (i.seller_id = s.id)
    WHERE i.approver IS NULL";

    $result = $conn->query($sql);

    $rows = array();

    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }

    print json_encode($rows);

    $conn->close();
?>