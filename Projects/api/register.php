<?php

$fname = $_POST['fname'];
$lname = $_POST['lname'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_pass = $_POST['confirm_pass'];
$phone = $_POST['phone'];
$address = $_POST['address'];
$city = $_POST['city'];

$connect = mysqli_connect('localhost','root','','student_marketplace');
$sqlregister = "INSERT INTO register VALUES ('{$fname}','{$lname}','{$username}','{$password}','{$email}',{$phone},'{$address}','{$city}');";
$sqllogin = "INSERT INTO login VALUES ('{$username}','{$email}','{$password}');";
if($password == $confirm_pass){
    mysqli_query($connect,$sqlregister);
    mysqli_query($connect,$sqllogin);
    mysqli_close($connect);
    header('Location: https://localhost/Projects/pages/login.html');
    exit();
}else{    
    echo '<script>
         alert("Passwords do not match");
     </script>';
}

?>
