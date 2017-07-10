/**
 * Created by malsha_h on 7/5/2017.
 */
var user = require('../models/user');
var passwordHash = require('password-hash');

module.exports = {
    getSignIn:function (req,res) {
        if((typeof req.query.password==="undefined") || (typeof req.query.name==="undefined")){
            return res.json({error: "undefined"});
        }
        return res.json({name: req.query.name , password: req.query.password});
    },
    // getSignUp:function (req,res) {
    //     if((typeof req.query.password==="undefined") || (typeof req.query.name==="undefined")){
    //         return res.json({error: "undefined"});
    //     }
    //     return res.json({name: req.query.name , password: req.query.password});
    // },
    postSignUp:function (req, res) {
        // password:passwordHash.generate(req.body.password)
       //authenticated?
        var newUser  = {
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            password:req.body.password
        };
        user.signUp(function (name) {
            return res.json({message:name});
        },newUser);

    }
};
