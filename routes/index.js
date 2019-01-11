var express = require('express');
var router = express.Router();
var food = require("../data sets/food.json");
var drinks = require("../data sets/drinks.json");
var condiments = require("../data sets/condiments.json");
var medicine = require("../data sets/med.json");
var toiletries = require("../data sets/toiletries.json");

/* GET home page. */
router.get('/', function (req, res, next) {

  res.render('index', {
    items: food
  });
});

router.get('/drinks', function (req, res, next) {
  res.render('drinks', {
    items: drinks
  });
});

router.get('/condiments', function (req, res, next) {
  res.render('condiments', {
    items: condiments
  });
});

router.get('/medicine', function (req, res, next) {
  res.render('medicine', {
    items: medicine
  });
});

router.get('/toiletries', function (req, res, next) {
  res.render('toiletries', {
    items: toiletries
  });
});

router.get('/payment', function (req, res, next) {
  res.render('payment', {
    header: "Payment now!"
  });
});

module.exports = router;