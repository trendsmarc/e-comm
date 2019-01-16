var express = require('express');
var router = express.Router();
var alldata = require("../data sets/data.json");
var drinks = require("../data sets/drinks.json");
var condiments = require("../data sets/condiments.json");
var medicine = require("../data sets/med.json");
var toiletries = require("../data sets/toiletries.json");
var globalCookie = "";

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    items: alldata,
    decodedJson: encodeURIComponent(JSON.stringify(alldata))
  });
});

router.get('/drinks', function (req, res, next) {
  res.render('drinks', {
    items: drinks,
    decodedJson: encodeURIComponent(JSON.stringify(drinks)),

  });
});

router.get('/condiments', function (req, res, next) {
  res.render('condiments', {
    items: condiments,
    decodedJson: encodeURIComponent(JSON.stringify(condiments))
  });
});

router.get('/medicine', function (req, res, next) {
  res.render('medicine', {
    items: medicine,
    decodedJson: encodeURIComponent(JSON.stringify(medicine))
  });
});

router.get('/toiletries', function (req, res, next) {
  res.render('toiletries', {
    items: toiletries,
    decodedJson: encodeURIComponent(JSON.stringify(toiletries))
  });
});

router.post('/getCookie', function (req, res) {
  var cookie = req.body.cookie;
  globalCookie = cookie;
});

router.get('/payment', function (req, res, next) {
  res.render('payment', {
    header: "Payment now!",
    data: JSON.parse("[" + globalCookie + "]"),
    decodedJson: encodeURIComponent(JSON.stringify(drinks)),
  });
  console.log(JSON.parse("[" + globalCookie + "]")[0].item_code);
});

module.exports = router;