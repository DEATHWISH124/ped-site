<?php
    session_start();
    include 'config.php';
    error_reporting(E_ERROR);

    $username = $_POST['usuarioNM'];
    $password = $_POST['senhaUSER'];

    $sql = "SELECT * FROM users WHERE username = '$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password'])) {
            echo "Login successful";
            $_SESSION['username'] = $username;
        } else {
            echo "Invalid password";
        }
    } else {
        echo "User not found";
    }
        $conn->close();
        error_reporting(0);
?>