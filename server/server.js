const mysql = require('mysql');
const express = require("express");
var app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json())
// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'yousuf2004',
    database: 'student_manager'
});

// Connect to the database
app.post("/add",(req,res) => {
    const firstName = req.body.firstName;
    const familyName = req.body.familyName;
    const dob = req.body.dob;

    const sql = "INSERT INTO students (firstname, lastname, date) VALUES (?, ?, ?)";
    // Define the values to be inserted
    const values = [firstName,familyName,dob];
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Error inserting data: ' + error.stack);
            return;
        }
        console.log('Data inserted successfully.');
    });
});

app.delete('/remove',(req,res) => {
    connection.query("DELETE FROM students", (err,result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.get('/students', (req,res) => {
    connection.query("SELECT * FROM students", (err,result) => {
        if(err) {
            console.log(err)
        }
        else {
            res.send(result);
        }
    });
});
app.listen(3001,() => {
    console.log("Running...");
});
