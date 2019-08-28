var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('About');
});

router.get('/contact', function(req, res, next) {
  res.render('Contact');
});

router.post('/process', function(req, res, next) {
  var a = req.body.name;
  res.render('home',{ans: a});
});

module.exports = router;
