var express = require('express');
var router = express.Router();
var user = require('../controllers/UserController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/signup', user.postSignUp);
router.post('/signin', user.postSignIn);
module.exports = router;

