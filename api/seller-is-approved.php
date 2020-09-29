
<?php
    include_once 'database.php';

    $database = new Database();
    $conn = $database->getConnection();

    $sellerId = $_GET['id'];

    $sql = "SELECT 
                CASE 
                    WHEN approver IS NOT NULL THEN 'true'
                    ELSE 'false'
                END AS 'approved'
            FROM sellers
            WHERE id = '$sellerId'";


    $result = $conn->query($sql);
    $r = mysqli_fetch_assoc($result);

    if ($r["approved"] == "true")
        echo "{\"success\":true}";
    else 
        echo "{\"success\":false}";

    $conn->close();
?>