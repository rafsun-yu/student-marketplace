<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    $connect = mysqli_connect('localhost','root','','student_marketplace');
    $sql = "SELECT username, email, password FROM login WHERE username = '$username' AND password = '$password';";
    $result = mysqli_query($connect,$sql);
    if(mysqli_num_rows($result)==1){
        if(!isset($_COOKIE['name'])){
            setcookie('name', $username, time()+3600);
        }        
        session_start();
        $_SESSION['name'] = $username;
        header('Location: https://localhost/Projects/index.php');
    }else{
        echo "Username or password incorrect";
    }
    
?>