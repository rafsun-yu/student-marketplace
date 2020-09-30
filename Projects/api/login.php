<?php
$user_id = $_POST['username'];
$password = $_POST['password'];

$connect = mysqli_connect('localhost', 'root', '', 'student_marketplace');
$sql = "SELECT user_id, password, CASE WHEN user_id IN(SELECT id FROM sellers) THEN 'seller' WHEN user_id IN(SELECT id FROM buyers) THEN 'buyer' ELSE 'admin' END AS user_type FROM login WHERE user_id = {$user_id} AND password = '{$password}';";
$result = mysqli_query($connect, $sql);
if ($result) {
    $array = array();
    $row = mysqli_fetch_assoc($result);
    $array[] = $row;
    if ($array[0]['user_type'] == 'admin') {
        if (mysqli_num_rows($result) == 1) {
            setcookie('loggedInUserId', $user_id, time() + 3600, "/");
            session_start();
            $_SESSION['name'] = $user_id;
            header('Location: http://localhost/src/admin/manage-approved-items.html');
        } else {
            echo "Username or password incorrect";
        }
    }
    if ($array[0]['user_type'] == 'seller') {
        if (mysqli_num_rows($result) == 1) {
            setcookie('loggedInUserId', $user_id, time() + 3600, "/");
            session_start();
            $_SESSION['name'] = $user_id;
            header('Location: http://localhost/src/seller/manage-items.html');
        } else {
            echo "Username or password incorrect";
        }
    }
    if ($array[0]['user_type'] == 'buyer') {
        if (mysqli_num_rows($result) == 1) {
            setcookie('loggedInUserId', $user_id, time() + 3600, "/");
            session_start();
            $_SESSION['name'] = $user_id;
            header('Location: http://localhost/Projects/index.php');
        } else {
            echo "Username or password incorrect";
        }
    }
} else {
    echo "Username or password incorrect";
}

mysqli_close($connect);
