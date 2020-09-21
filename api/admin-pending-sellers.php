
<?php
    include_once 'database.php';

    $database = new Database();
    $conn = $database->getConnection();

    $sql = "SELECT s.id, name, phone_no, address
    FROM sellers s INNER JOIN users u ON (s.id = u.id)
    WHERE s.approver IS NULL;";

    $result = $conn->query($sql);

    $rows = array();

    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }

    print json_encode($rows);

    $conn->close();
?>