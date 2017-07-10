/**
 * Created by malsha_h on 7/5/2017.
 */
var db = require('../dbconnection');


exports.signUp = function (callback,post) {
    // var post  = {firstname:'me', lastname:'you', email:'hi', password:'yes'};
    db.query('INSERT INTO user (first_name, last_name , email, password) VALUES (?,?,?,?)', [post.first_name,post.last_name,post.email,post.password], function(err, rows) {
        // db.query('select * from user', function(err, rows) {
        if (err) throw err;
        return callback("success");
    });
};
exports.signIn = function (callback,post) {
    // var post  = {firstname:'me', lastname:'you', email:'hi', password:'yes'};
    db.query('INSERT INTO user (first_name, last_name , email, password) VALUES (?,?,?,?)', [post.first_name,post.last_name,post.email,post.password], function(err, rows) {
        // db.query('select * from user', function(err, rows) {
        if (err) throw err;
        return callback("success");
    });
};