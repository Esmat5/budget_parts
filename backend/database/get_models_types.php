<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type"); 
header("Content-Type: application/json");

require_once 'db.php';


/**
 * Function to get models, and types of autoes from the auto_parts table
 *
 * @param mysqli $conn The database connection
 * @return array An array of distinct modAndTypes$modAndTypes
 */

function getModelsAndTypes($conn, $make) {
    // SQL query to fetch distinct makes from make column from the auto_parts table
    $sqlQuery = "SELECT model, part_type FROM auto_parts WHERE make = '$make'";
    // Executing the SQL query
    $result = $conn->query($sqlQuery);

    // Check if the query was successful
    if ($result === false) {
        return [];
    }
    // An array to store distinct makes
    $modAndTypes = [];
    // Loop through the result set and fetch each distinct make
    while ($row = $result->fetch_assoc()) {
        // Add the make to the modAndTypes array
        $modAndTypes[] = [
            'model' => $row['model'],
            'part_type' => $row['part_type']
        ];
    }
    return $modAndTypes;
}

// Creating a connection to the database
Global $HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT;
$conn = create_connection($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT);

// Getting the make from the GET request
$make = isset($_GET['make']) ? $_GET['make'] : '';

// Calling the function to get distinct makes
$modelsAndTypes = getModelsAndTypes($conn, $make);

// Closing the connection
$conn->close();


echo json_encode($modelsAndTypes);

?>