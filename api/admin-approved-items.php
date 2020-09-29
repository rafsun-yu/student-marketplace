
<?php
    include_once 'database.php';

    $database = new Database();
    $conn = $database->getConnection();


    //AND title LIKE '%%' AND s.id = ''

    $sql = "SELECT i.id as item_id, title, s.id as seller_id, name as seller_name, 
                CASE 
                    WHEN featurer IS NOT NULL THEN 'true'
                    ELSE 'false' 
                END as featured 
            FROM items i INNER JOIN users s ON (i.seller_id = s.id)
            WHERE i.approver IS NOT NULL";

    if(isset($_GET['title'])) {
        $title = $_GET['title'];
        if ($title != "")
            $sql .= " AND title LIKE '%" . $title . "%'";
    }

    if(isset($_GET['sellerId'])) {
        $sellerId = $_GET['sellerId'];
        if ($sellerId != "")
            $sql .= " AND s.id = '" . $sellerId . "'";
    }

    $result = $conn->query($sql);

    $rows = array();

    while($r = mysqli_fetch_assoc($result)) {
        if ($r["featured"] == "false")
            $r["featured"] = false;
        else
            $r["featured"] = true;

        $rows[] = $r;
    }

    print json_encode($rows);

    $conn->close();
?>