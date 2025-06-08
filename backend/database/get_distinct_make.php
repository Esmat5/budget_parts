<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type"); 
header("Content-Type: application/json");

require_once 'db.php';


/**
 * Function to get distinct makesList$makesList from the auto_parts table
 *
 * @param mysqli $conn The database connection
 * @return array An array of distinct makesList$makesList
 */

function getDistinctMake($conn) {
    // SQL query to fetch distinct makes from make column from the auto_parts table
    $sqlQuery = "SELECT DISTINCT make FROM auto_parts";
    // Executing the SQL query
    $result = $conn->query($sqlQuery);

    // Check if the query was successful
    if ($result === false) {
        return [];
    }
    // An array to store distinct makes
    $makesList = [];
    // Loop through the result set and fetch each distinct make
    while ($row = $result->fetch_assoc()) {
        // Add the make to the makesList array
        $makesList[] = $row['make'];
    }
    return $makesList;
}

// Creating a connection to the database
Global $HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT;
$conn = create_connection($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT);
// Calling the function to get distinct makes
$distinctMakes = getDistinctMake($conn);

// Closing the connection
$conn->close();


echo json_encode($distinctMakes);

?>