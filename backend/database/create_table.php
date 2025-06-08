<?php
require_once 'db.php';

// Function to create the auto_parts table
// This function creates a table named auto_parts with the specified columns
// The table will have an auto-incrementing primary key, and columns for make, model, part_type, part_number, and created_at timestamp
// If the table already exists, it will not be created again
// It will output a success message if the table is created successfully, or an error message if there is an issue
// The function uses the create_connection function to establish a connection to the database
function create_table() {
    Global $HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT;
    // Create a connection to the database
    $conn = create_connection($HOSTNAME, $USERNAME, $PASSWORD, $DATABASE, $PORT);

    // SQL to create the table
    $sql = "CREATE TABLE IF NOT EXISTS auto_parts (
        id INT(11) AUTO_INCREMENT PRIMARY KEY,
        make VARCHAR(100) NOT NULL,
        model VARCHAR(100) NOT NULL,
        part_type VARCHAR(100) NOT NULL,
        part_number VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";

    if ($conn->query($sql) === TRUE) {
        echo "Table auto_parts created successfully";
    } else {
        echo "Error creating table: " . $conn->error;
    }
    $conn->close();
}

// Call the function to create the table
create_table();
?>