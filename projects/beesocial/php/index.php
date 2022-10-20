<?php require_once('header.php'); ?>
<div class="container">
    <div class="top-bar text-center">
        <div class="top-bar-left">
            <img class="logo" src="../pictures/logotype.png" alt="logo">
        </div>
        <div class="top-bar-right">
            <ul class="list-group d-flex list-group-horizontal">
                <li class="list-group-item"><a href="about.php">About us</a></li>
                <li class="list-group-item"><a href="contact.php">Contact</a></li>
                <?php 
                if (!isset($_SESSION['loggedIn'])){ //funkcja login token, zalogowany przyjmuje wartość 1, niezalogowany 0
                    $loginToken = 0;
                } else {
                    $loginToken = $_SESSION['loggedIn'];
                }

                if ($loginToken == 0 || !isset($loginToken)){
                echo '<li class="list-group-item"><a href="login.php">Sign in</a></li>';
                } else {
                echo '<li class="list-group-item"><a href="profile.php">Profile</a></li>';
                echo '<li class="list-group-item"><a href="logout.php">Sign out</a></li>';
                }
                ?>
            </ul>
        </div>
        <div class="main">

        </div>
    </div>
</div>
<?php require_once('footer.php'); ?>
