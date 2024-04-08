<?php
    include 'config.php';
    error_reporting(E_ERROR);

    $username = $_POST['usuarioNM'];
    $password = password_hash($_POST['senhaUSER'], PASSWORD_DEFAULT);
    $email = $_POST['emailUSER'];

    $sql = "INSERT INTO users (username, password, email) VALUES ('$username', '$password', '$email')";


    if ($conn->query($sql) === TRUE){
        echo "Sucesso.";

    }
     else{
        echo "Erro: " . $sql . "<br>" . $conn->error;

     }
     $conn->close();
     error_reporting(0);
?>