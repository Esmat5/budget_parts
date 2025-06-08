<?php 
$HOSTNAME = "auto-data-db.c5gwqyig0aa1.us-east-1.rds.amazonaws.com";
$USERNAME = "admin";
$PASSWORD = "AutoData123";
$DATABASE = "auto_parts_data_db";
$PORT = 3306;


// function to create connection to the database
// This function uses the global variables defined in db.php to connect to the database
function create_connection($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT) {

    $conn = new mysqli($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT);
    if (!$conn) {
        die("Connection failed: " . $conn->connect_error);
    }
    else {
        echo "Connected successfully";
    }
    return $conn;
}


create_connection($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT);
?>