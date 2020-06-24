var mongodb = require('mongojs');

// var dataBaseURL = 'mongodb://127.0.0.1:27017/MERN';
var dataBaseURL = 'MERN';


console.log("==========db url", dataBaseURL);

var collections = ['post'];

module.exports = mongodb(dataBaseURL, collections);


