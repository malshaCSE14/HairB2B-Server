/**
 * Created by malsha_h on 7/11/2017.
 */


var Sequelize = require('sequelize');

const connection = new Sequelize('hairb2b', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

// connection.authenticate().then(() => {console.log('Connection has been established successfully.');}).catch(err => {console.error('Unable to connect to the database:', err);});

module.exports = connection;