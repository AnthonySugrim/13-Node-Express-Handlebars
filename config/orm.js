var connection = require("./connection");
const { connect } = require("./connection");

// * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. 
// These are the methods you will need to use in order to retrieve and store data in your database.



// * Export the ORM object in `module.exports`.

var orm ={
 all: function(tableInput, cb){
     // * `selectAll()`
     var queryString = "SELECT * FROM " + tableInput + ";";
     connection.query(queryString, function(err, result){
         if(err){
             throw err
         }
         cb(result);
     });
},

// create: function(table, cols, cb, vals){
//     // * `insertOne()`
//     var queryString = "INSERT INTO " + table;

//     queryString += " (";
//     queryString += cols.toString();
//     queryString += " )";
//     queryString += "VALUES (";
//     queryString += ") ";

//    console.log(queryString);

//    connection.query(queryString, vals, function(err, result){
//        if (err){
//            throw err
//        }
//        cb(result);
//    })
// },

// // * `updateOne()`
// update: function(data){


// }

};

module.exports = orm;