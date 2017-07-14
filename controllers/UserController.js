/**
 * Created by malsha_h on 7/11/2017.
 */
var sequelize = require('sequelize');
var passwordHash = require('password-hash');
var model = require('../models');


module.exports = {
    postSignUp : function(req, res) {
        var hashedPassword = passwordHash.generate(req.body.password);
        console.log(req.body);
        model.user.findOrCreate({
            where: {
                email: req.body.email
            },
            defaults: {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                password: hashedPassword
            }
        }).spread(function(user, created){
            if(created){
                return res.json({status : "success"});
            }
            console.log('fail');
            return res.json({error : "User already exist", status : "fail"});
        }).catch(function(err){
            console.log('Error: ', err);
            return res.json({error : "Server Error", status : "fail"});
        });
    },
    postSignIn : function (req, res) {
        console.log(req.body);
        var hashedPassword = passwordHash.generate(req.body.password);
        model.user.findOne({
            where: {
                email: req.body.email
            }
        }).then(function(user){
            if(passwordHash.verify(req.body.password,user.password)) {
                return res.json({
                    status: "successful",
                    email: req.body.email
                });
            }
            return res.json({error : "Login Failed", status : "failed"});
        }).catch(function(err){
            console.log('Error: ', err);
            return res.json({error : "Login Failed", status : "failed"});
        });
    }
};



