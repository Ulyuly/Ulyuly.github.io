<?php require_once('header.php'); ?>
<div class="home-icon"><a href="index.php"><i class="fa-solid fa-house fa-2xl text-left pt-3 ps-3"></i></a></div>
<div class="container">
    <div class="reg-form text-center">
        <h1>SIGN IN</h1>
        <form method="post">
            <input class="mb-3" size="28" type="text" name="username" id="username" placeholder="Username"><br>
            <input class="mb-3" size="28" type="password" name="password" id="password" placeholder="Password"><br>
            <input class="mb-3" type="submit" name="submit" id="submit" value="SIGN IN"><br>
            <p>You don't have an account? <a href="register.php">Sign up now</a>.</p>
        </form>
        <?php
    if (isset($_POST['username']) && isset($_POST['password'])){
        $_SESSION['loggedIn'] = 0;

        $username = $_POST['username'];
        $password = $_POST['password'];
    
        $loginQuery = "SELECT `username` FROM `users` WHERE `username` LIKE '".$username."';";
        $loginQueryResult = mysqli_query($connect, $loginQuery);

        if ($loginQueryResult -> num_rows > 0) 
        {
            $passwordHashed = sha1($password);

            $loginQuery2 = "SELECT `password` from `users` where `password` like '".$passwordHashed."';";
            $loginQuery2Result = mysqli_query($connect, $loginQuery2);
            if($loginQuery2Result -> num_rows > 0){
                $_SESSION['loggedIn'] = 1;
                header("location: profile.php");
                $_SESSION['username'] = $username;
            } else {
                echo "Invalid password for given user.";
            }
        } else {
            echo "Unknown user.";
        }
}
?>
    </div>
</div>

<?php require_once('footer.php'); ?>
