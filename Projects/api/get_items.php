<?php

    $connect = mysqli_connect('localhost','root','','student_marketplace');

    $sql = "SELECT id,image_url,title,description,price FROM Items;";

    $result = mysqli_query($connect,$sql);

    $array = array();

    while($row = mysqli_fetch_assoc($result)) {
        $array[] = $row;
    }

    mysqli_close($connect);
    echo json_encode($array);

?>