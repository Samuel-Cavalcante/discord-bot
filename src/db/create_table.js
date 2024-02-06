var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Miya"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, user_id VARCHAR(40) NOT NULL, username VARCHAR(25) NOT NULL, discriminator VARCHAR(4) NOT NULL, count INT NOT NULL)";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
 