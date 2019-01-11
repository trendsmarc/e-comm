var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: "Item One",
    title2: "Item Two",

    price: "P24.50",
    price2: "P50.50"
  });
});

router.get('/drinks', function (req, res, next) {
  res.render('drinks', {

  });
});

router.get('/condiments', function (req, res, next) {
  res.render('condiments', {

  });
});

router.get('/medicine', function (req, res, next) {
  res.render('medicine', {

  });
});

router.get('/toiletries', function (req, res, next) {
  res.render('toiletries', {

  });
});


module.exports = router;