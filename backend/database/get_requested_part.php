<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
require_once 'db.php';



/**
 * Function to get requested part from the auto_Number$foundPartNumber table
 *
 * @param mysqli $conn The database connection
 * @return array An array of requested part numbers
 */
function getRequestedPart($conn, $make, $model, $part_type) {

    // SQL query to fetch  based on make, model, and part_type
    $sqlQuery = "SELECT * FROM auto_parts WHERE make = '$make' AND model = '$model' AND part_type = '$part_type'";

    // Executing the SQL query.
    $result = $conn->query($sqlQuery);

    // Check if the query was successful
    if (!$result) {
        return [];
    }

    $foundPartNumber = [];

    // Loop through the result set and fetch each part
    while ($row = $result->fetch_assoc()) {
        // Add the part to the foundPartNumber array
        $foundPartNumber[] = [
            'part_id' => $row['id'],
            'make' => $row['make'],
            'model' => $row['model'],
            'part_type' => $row['part_type'],
            'part_number' => $row['part_number']
            
        ];
    }

    // Return the found part numbers
    return $foundPartNumber;
}

// extracting the input data from the request
$inputData = json_decode(file_get_contents('php://input'), true);
    
// Extracting make, model, and part_type from the input data
$make = $inputData['make'] ?? '';
$model = $inputData['model'] ?? '';
$part_type = $inputData['part_type'] ?? '';

Global $HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT;
// Creating a connection to the database
$conn = create_connection($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT);

$partNumber = getRequestedPart($conn, $make, $model, $part_type);


// Closing the connection
$conn->close();

// Returning the found part numbers as a JSON response
echo json_encode($partNumber);

?>