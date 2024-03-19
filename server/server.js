const mysql = require('mysql');
const express = require("express");
var app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json())
// Create a connection to the database
const connection = mysql.createConnection({
    host: 'sql3.freesqldatabase.com',
    user: 'sql3692490',
    password: 'mf4Iet99E5',
    database: 'sql3692490',
});


var query = "CREATE TABLE IF NOT EXISTS results (RID INT PRIMARY KEY NOT NULL AUTO_INCREMENT, coursename VARCHAR(55), studentname VARCHAR(55), score CHAR(1))";

connection.query(query,(error, results, fields) => {
    if (error) {
        console.error('Error inserting data: ' + error.stack);
        return;
    }
    console.log('Table created.');
});

query = "CREATE TABLE IF NOT EXISTS students (SID INT PRIMARY KEY NOT NULL AUTO_INCREMENT, firstname VARCHAR(45), lastname VARCHAR(45),date DATE)";

connection.query(query,(error, results, fields) => {
    if (error) {
        console.error('Error inserting data: ' + error.stack);
        return;
    }
    console.log('Table created.');
});

query = "CREATE TABLE IF NOT EXISTS courses (CID INT PRIMARY KEY NOT NULL AUTO_INCREMENT, coursename VARCHAR(45))";

connection.query(query,(error, results, fields) => {
    if (error) {
        console.error('Error inserting data: ' + error.stack);
        return;
    }
    console.log('Table created.');
});


// Connect to the database
app.post("/addstudent",(req,res) => {
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

app.post("/addcourse",(req,res) => {
    const courseName = req.body.courseName;

    const sql = "INSERT INTO courses (coursename) VALUES (?)";
    // Define the values to be inserted
    const values = [courseName];
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Error inserting data: ' + error.stack);
            return;
        }
        console.log('Data inserted successfully.');
    });
});

app.post("/addresult",(req,res) => {
    const name = req.body.name;
    const course = req.body.course;
    const score = req.body.score;
    const sql = "INSERT INTO results (coursename,studentname,score) VALUES (?,?,?)";
    // Define the values to be inserted
    const values = [course,name,score];
    console.log(values);
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Error inserting data: ' + error.stack);
            return;
        }
        console.log('Data inserted successfully.');
    });
});

app.delete('/removestudent',(req,res) => {
    connection.query("DELETE FROM students", (err,result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.delete('/removecourse',(req,res) => {
    connection.query("DELETE FROM courses", (err,result) => {
        if(err) {
            console.log(err);
        }
        else {
            res.send(result);
        }
    });
});

app.delete('/removeresults',(req,res) => {
    connection.query("DELETE FROM results", (err,result) => {
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

app.get('/courses', (req,res) => {
    connection.query("SELECT * FROM courses", (err,result) => {
        if(err) {
            console.log(err)
        }
        else {
            res.send(result);
        }
    });
});

app.get('/results', (req,res) => {
    connection.query("SELECT * FROM results", (err,result) => {
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
