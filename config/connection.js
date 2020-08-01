var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "Rickforeva22"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected! at port 3000");
});  

module.exports = connection;