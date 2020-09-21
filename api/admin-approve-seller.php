
<?php
    include_once 'database.php';

    $database = new Database();
    $conn = $database->getConnection();

    $sellerId = $_GET['id'];
    $adminId = $_GET['admin_id'];

    $sql = "UPDATE sellers
            SET approver = '$adminId'
            WHERE id = '$sellerId';";

    $conn->query($sql);

    if ($conn -> affected_rows > 0)
        echo '{"success":true}'; //change this
    else 
        echo '{"success":false}';

    $conn->close();
?>