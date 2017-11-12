var express = require('express');
var www = express.Router();

/* GET home page. */
www.get('/', function(req, res, next) {
    console.log("Serving: ", req.headers.host);
  res.render('coming-soon', { title: 'www - Coming Soon' });
});

module.exports = www;
