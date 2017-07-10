var express = require('express');
var router = express.Router();
var index = require('../controllers/viewController');
var user = require('../controllers/UserController');
var db = require('../dbconnection');
// var connection = db.getConnection();
/* GET home page. */

router.get('/', index.getView);
router.get('/signin', user.getSignIn);
router.post('/signup', user.postSignUp);

//
// exports.register = function (name,password) {
//     var values = [name, password];
//     var query = 'INSERT INTO user (name, password) VALUES(?,?)';
//     connection.query(query, values, function (err, result) {
//         if(err) throw  err;
//     });
// };
// exports.isUserExists = function (name, callback) {
//     var query = 'SELECT id FROM user WHERE name=?';
//     connection.query(query, name, function (err, rows) {
//         if(err){
//             callback(err,null);
//         }else {
//             callback(null, rows);
//         }
//     });
// };

// app.listen(3000);


module.exports = router;
