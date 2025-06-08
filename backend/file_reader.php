<?php
require __DIR__ . '/vendor/autoload.php';
require_once './database/db.php';
require_once './database/create_table.php';

use PhpOffice\PhpSpreadsheet\IOFactory;

// Loadind the path of the Excel file
$filePath = __DIR__ . "/test-data.xlsx";

// Loading the spreadsheet
$spreadsheet = IOFactory::load($filePath);
// Getting the active sheet
$activeSheet = $spreadsheet->getActiveSheet();

// Creating a connection to the database
$conn = create_connection($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT);
// Praparing the SQL statement to insert data into the auto_parts table
$stmt = $conn->prepare("INSERT INTO auto_parts (make, model, part_type, part_number) VALUES (?, ?, ?, ?)");

// Looping through each row in the active sheet starting from the second row
// (assuming the first row contains headers)
for ($row = 2; $row <= $activeSheet->getHighestRow(); $row++) {
    $make       = $activeSheet->getCell('A' . $row)->getValue();
    $model      = $activeSheet->getCell('B' . $row)->getValue();
    $partType   = $activeSheet->getCell('C' . $row)->getValue();
    $partNumber = $activeSheet->getCell('D' . $row)->getValue();

    // Check if all values are not empty
    if (!$make && !$model && !$partType && !$partNumber) continue;

    // Bind parameters and execute the statement
    $stmt->bind_param("ssss", $make, $model, $partType, $partNumber);
    
    // Execute the prepared statement
    $stmt->execute();
}

// Displaying a message after all rows have been inserted
echo "Done inserting.\n";

// Closing the statement and connection
$stmt->close();
$conn->close();


?>

