/**
 * Created by malsha_h on 7/4/2017.
 */
module.exports = {
    getView: function(req, res, next) {
        res.render('index', { title: 'Express' });
    },
    // getLogin: function (req, res) {
    //     res.json({"name":"A","password":"B"})
    // }

};
