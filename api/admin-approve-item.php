
<?php
    include_once 'database.php';

    $database = new Database();
    $conn = $database->getConnection();

    $itemId = $_GET['id'];
    $adminId = $_GET['admin_id'];

    $sql = "UPDATE items
            SET approver = '$adminId'
            WHERE id = '$itemId';";

    $conn->query($sql);

    if ($conn -> affected_rows > 0)
        echo '{"success":true}'; 
    else 
        echo '{"success":false}';

    $conn->close();
?>