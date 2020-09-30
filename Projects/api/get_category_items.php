<?php

session_start();
if (isset($_SESSION['name'])) {
    $username = $_SESSION['name'];
}

$id = $_GET['id'];
if ($id == 'Books') {
    $sql = "SELECT id,image_url,title,description,price FROM Items WHERE category ='Books';";
} elseif ($id == 'Tuitions') {
    $sql = "SELECT id,image_url,title,description,price FROM Items WHERE category ='Tuitions';";
} elseif ($id == 'Notes') {
    $sql = "SELECT id,image_url,title,description,price FROM Items WHERE category ='Notes';";
} elseif ($id == 'Accessories') {
    $sql = "SELECT id,image_url,title,description,price FROM Items WHERE category ='Accessories';";
} elseif ($id == 'Others') {
    $sql = "SELECT id,image_url,title,description,price FROM Items WHERE category ='Others';";
}

$connect = mysqli_connect('localhost', 'root', '', 'student_marketplace');
$result = mysqli_query($connect, $sql);
$array = array();

while ($row = mysqli_fetch_assoc($result)) {
    $array[] = $row;
}

mysqli_close($connect);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Market</title>
    <!-- CSS & Bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="../Css/style2.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css">
</head>

<body>
    <header class="d-flex">

        <div class="image mr-auto">
            <img src="../images/logo.png" alt="">
        </div>

        <form action="search.php" method="post" class="search-bar mr-auto align-self-center">
            <ul class="d-flex m-auto align-items-center w-100">
                <li><input class="" type="text" placeholder="Search" name="search"></li>
                <li><a href=""><button type="submit" name="submit" class="search"><i class="fas fa-search"></i></button></a></li>
            </ul>

        </form>

        <div class="align-self-center">
            <ul class="nav-items d-flex m-auto align-items-center justify-content-center">
                <li><a href="../index.php">Home</a></li>
                <li><a href="../pages/items.php">Items</a></li>
            </ul>
        </div>

        <div class="align-self-center ml-auto">
            <?php
            if (isset($_SESSION['name'])) {
                echo '<button class="login"><a href="logout.php">Logout</a></button>';
            } else {
                echo '<button class="login"><a href="../pages/login.html">Login</a></button>
                    <button class="register"><a href="../pages/register.html">Register</a></button>';
            }
            ?>
        </div>

    </header>

    <a href="../pages/cart.html">
        <div class="stickycart">
            <div class="itemcount">
                <i class="fas fa-cart-plus"></i>
                <p><span id="count">0</span> Items</p>
            </div>
            <div class="total">
                <span>Tk.</span>
                <span>0</span>
            </div>
        </div>
    </a>

    <div class="container">

        <Section class="mt-4">
            <div class="row" id="row">
                <?php
                if (empty($array)) {
                    echo '<div>
                            <h1>No items in this category</h1>
                        </div>';
                } else {
                    for ($i = 0; $i < count($array); $i++) {
                        echo '<div class="col-md-3">
                        <div class="item-display">
                            <div class="item-image">
                                <img src=' . $array[$i]['image_url'] . '>
                            </div>
                            <h1 style="margin-top: 20px;">' . $array[$i]['title'] . '</h1>
                            <p>' . $array[$i]['description'] . '</p>
                            <p><span>' . $array[$i]['price'] . '</span> Tk.</p>
                            <button class="addcart">Add to cart</button>
                        </div>
                    </div>';
                    }
                }
                ?>
            </div>
        </Section>
    </div>



    <footer>
        <div class="row">
            <div class="col-md-6">
                <ul class="footer-nav">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of use</a></li>
                </ul>
            </div>
            <div class="col-md-6">
                <ul class="social-links">
                    <li><a href="#"><i class="facebook fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="twitter fab fa-twitter"></i></a></li>
                    <li><a href="#"><i class="google fab fa-google"></i></a></li>
                    <li><a href="#"><i class="instagram fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </footer>


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="../js/get-category-items.js"></script>
    <script src="../js/cart.js"></script>


</body>

</html>