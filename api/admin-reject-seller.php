
<?php
    include_once 'database.php';

    $database = new Database();
    $conn = $database->getConnection();

    $sellerId = $_GET['id'];

    $sql = "DELETE FROM users
            WHERE id = '$sellerId';";

    $conn->query($sql);

    if ($conn -> affected_rows > 0)
        echo @'{"success":true}';
    else 
        echo @'{"success":false}';

    $conn->close();
?>