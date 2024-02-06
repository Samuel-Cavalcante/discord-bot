var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  db.query("CREATE DATABASE Miya", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});