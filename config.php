<?php
error_reporting(E_ERROR);

$servername = "localhost";
$username = "zerkova";
$password = "ovogrande1";
$dbname = "pedcorpovada";

// conexao nova
$conn = new mysqli($servername, $username, $password, $dbname);

//conexao real?
if ($conn ->connnect_error) {
    die("Falha na conexão: " . $conn ->connect_error);
}
error_reporting(0);
?>