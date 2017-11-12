var express = require('express');
var enchanting = express.Router();

/* GET home page. */
enchanting.get('/', function(req, res, next) {
    console.log("Serving: ", req.headers.host);
  res.render('coming-soon', { title: 'Enchanting - Coming Soon' });
});

module.exports = enchanting;
