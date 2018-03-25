var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:'Side Face'});
});

router.get('/galleries_color', function(req, res, next) {
  res.render('galleries_color');
});
router.get('/galleries_emotion', function(req, res, next) {
  res.render('galleries_emotion');
});
router.get('/galleries_extream', function(req, res, next) {
  res.render('galleries_extream');
});
router.get('/galleries_movement', function(req, res, next) {
  res.render('galleries_movement');
});
router.get('/galleries_portrait', function(req, res, next) {
  res.render('galleries_portrait');
});
router.get('/#contact_page', function(req, res, next) {
  res.render('index');
});


module.exports = router;
