<?php

$name = $_POST['fname'].' '.$_POST['lname'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_pass = $_POST['confirm_pass'];
$phone = $_POST['phone'];
$address = $_POST['address'].", ".$_POST['city'];

$connect = mysqli_connect('localhost','root','','student_marketplace');
if(isset($_POST['seller'])){
    $sql = "INSERT INTO users VALUES ('{$username}','{$name}','{$phone}','{$address}');";
    $sql_login = "INSERT INTO login VALUES ('{$username}','{$password}');";
    $sql_user = "INSERT INTO sellers VALUES ('{$username}',NULL);";
}else{
    $sql = "INSERT INTO users VALUES ('{$username}','{$name}','{$phone}','{$address}');";
    $sql_login = "INSERT INTO login VALUES ('{$username}','{$password}');";
    $sql_user = "INSERT INTO buyers VALUES ('{$username}');";
}
if($password == $confirm_pass){
    mysqli_query($connect,$sql);
    mysqli_query($connect,$sql_login);
    mysqli_query($connect,$sql_user);
    mysqli_close($connect);
    header('Location: https://localhost/Projects/pages/login.html');
    exit();
}else{    
    echo '<script>
         alert("Passwords do not match");
     </script>';
}

?>
