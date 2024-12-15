'use strict'
const mysql = require('mysql');
//local mysql db connection
const dbConn = mysql.createConnection({
  host  : 'localhost',
  user  : 'root',
  password  : '',
  database : 'recipeasy'
});
dbConn.connect(function(err) {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Database Connected!");
});
module.exports = dbConn;