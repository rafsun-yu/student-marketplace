
<?php
    include_once 'database.php';

    $database = new Database();
    $conn = $database->getConnection();

    $sellerId = $_GET['id'];

    $sql = "SELECT id as item_id, title, price,
                CASE 
                    WHEN approver IS NULL THEN 'Pending'
                    ELSE 'Approved'
                END AS status
            FROM items
            WHERE seller_id = '$sellerId'";

    $result = $conn->query($sql);

    $rows = array();

    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }

    print json_encode($rows);

    $conn->close();
?>