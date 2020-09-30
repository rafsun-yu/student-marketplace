<?php
    session_start();
    session_destroy();
    setcookie('loggedInUserId', "");
    header('Location: http://localhost/Projects/pages/login.html');
?>