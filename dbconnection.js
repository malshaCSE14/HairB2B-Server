/**
 * Created by malsha_h on 7/5/2017.
 */
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'hairb2b'
    }
)
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports= connection;