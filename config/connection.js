var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Rickforeva22",
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected! at port 3000");
});  

module.exports = connection;