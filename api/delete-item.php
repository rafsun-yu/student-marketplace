
<?php
    include_once 'database.php';

    $database = new Database();
    $conn = $database->getConnection();

    $itemId = $_GET['id'];
    $userId = $_GET['user_id'];

    $sql = "DELETE FROM items
            WHERE id = '$itemId';";

    $conn->query($sql);

    if ($conn -> affected_rows > 0)
        echo '{"success":true}'; 
    else 
        echo '{"success":false}';

    $conn->close();
?>