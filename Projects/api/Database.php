<?php
class Database{
  
    // get the database connection
    public function getConnection(){
  
        $conn = new MySQLi("localhost", "root", "" , "student_marketplace");

        if ($conn -> connect_error) {
            die( "Not connected, error:" .$conn -> connect_error);
        }
  
        return $conn;
    }
}
?>