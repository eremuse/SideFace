var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:'Side Face'});
});
router.get('/galleries_movements1', function(req, res, next) {
  res.render('galleries_movements1');
});
router.get('/galleries_movements2', function(req, res, next) {
  res.render('galleries_movements2');
});
router.get('/galleries_profiles', function(req, res, next) {
  res.render('galleries_profiles');
});


module.exports = router;
