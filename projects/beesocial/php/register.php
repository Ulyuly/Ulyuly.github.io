<?php require_once('header.php'); ?>
<div class="home-icon"><a href="index.php"><i class="fa-solid fa-house fa-2xl text-left pt-3 ps-3"></i></a></div>
<div class="container">
    <div class="reg-form text-center">
        <h1>REGISTRATION</h1>
        <form method="post">
            <input class="mb-3" size="28" type="text" name="username" id="username" placeholder="Username"><br>

            <input class="mb-3" size="28" type="password" name="password" id="password" placeholder="Password"><br>

            <input class="mb-3" size="28" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm password"><br>

            <input class="mb-3" type="reset" name="reset" id="reset" value="RESET">
            <input class="mb-3" type="submit" name="submit" id="submit" value="SIGN UP">
        </form>
        Already have an account? <a href="login.php">Login here</a>.<br>
        <?php
            if(isset($_POST['username']) && isset($_POST['password']) && isset($_POST['confirmPassword']) && isset($_POST['submit'])){
                $username = $_POST['username'];
                $password = $_POST['password'];
                $confirmPassword = $_POST['confirmPassword'];
                $submit = $_POST['submit'];

                $sha = sha1($password);

                $number = preg_match('@[0-9]@', $password);
                $uppercase = preg_match('@[A-Z]@', $password);
                $specialChars = preg_match('@[^\w]@', $password);
                $lowercase = preg_match('@[a-z]@', $password);

                $registerQuery = "INSERT INTO `users` (`username`,`password`) VALUES ('$username','$sha')";

                if(empty($username) || empty($password) || empty($confirmPassword)){
                    echo "Fill in all the required fields.";
                } else if(strlen($username) < 8){
                    echo "Usename must be at least 8 characters in length.";
                } else if(strlen($password) < 8 || !$number || !$uppercase || !$lowercase || !$specialChars) {
                    echo "Password must be at least 8 characters in length and must contain at least one number, one upper case letter and one special character.";
                } else if($password !== $confirmPassword){
                    echo "Passwords are not the same.";
                } else {
                    mysqli_query($connect, $registerQuery);
                    echo "Great! You've successfully created your account. <a href='index.php'>Go to the main page.</a>";
                }
            }
        ?>
    </div>
</div>
<?php require_once('footer.php'); ?>