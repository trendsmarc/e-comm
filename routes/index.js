var express = require('express');
var router = express.Router();
var alldata = require("../data sets/data.json");
var drinks = require("../data sets/drinks.json");
var condiments = require("../data sets/condiments.json");
var medicine = require("../data sets/med.json");
var toiletries = require("../data sets/toiletries.json");
var Cookies = require('js-cookie/src/js.cookie.js');
var globalCookie = "";
var Handlebars = require('handlebars');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    items: alldata,
    decodedJson: encodeURIComponent(JSON.stringify(alldata))
  });
});

/*food page*/
router.get('/foods', HTML_ACCEPTED, function (req, res, next) {
  res.render('index', {
    items: alldata,
    decodedJson: encodeURIComponent(JSON.stringify(alldata))
  });
});

router.get('/foods', JSON_ACCEPTED, function (req, res, next) {
  res.json(alldata)
});

/*drinks page*/
router.get('/drinks', HTML_ACCEPTED, function (req, res, next) {
  res.render('drinks', {
    items: drinks,
    decodedJson: encodeURIComponent(JSON.stringify(drinks)),
  });
});

router.get('/drinks', JSON_ACCEPTED, function (req, res, next) {
  res.json(drinks)
});

router.get('/condiments', HTML_ACCEPTED, function (req, res, next) {
  res.render('condiments', {
    items: condiments,
    decodedJson: encodeURIComponent(JSON.stringify(condiments))
  });
});

router.get('/condiments', JSON_ACCEPTED, function (req, res, next) {
  res.json(condiments)
});

router.get('/medicine', HTML_ACCEPTED, function (req, res, next) {
  res.render('medicine', {
    items: medicine,
    decodedJson: encodeURIComponent(JSON.stringify(medicine))
  });
});

router.get('/medicine', JSON_ACCEPTED, function (req, res, next) {
  res.json(medicine)
});

router.get('/toiletries', HTML_ACCEPTED, function (req, res, next) {
  res.render('toiletries', {
    items: toiletries,
    decodedJson: encodeURIComponent(JSON.stringify(toiletries))
  });
});

router.get('/toiletries', JSON_ACCEPTED, function (req, res, next) {
  res.json(toiletries)
});

router.post('/getCookie', function (req, res) {
  var cookie = req.body.cookie;

  if (cookie == "") {
    globalCookie = "";
  } else {
    globalCookie = JSON.parse("[" + cookie + "]");

  }
  console.log("Sample!!!!!!!!!!!!" + JSON.stringify(globalCookie));
});

router.get('/payment', function (req, res, next) {
  res.render('payment', {
    header: "Payment now!",
    //ddata: Cookies.get("ITEMS")
    data: globalCookie
  });

  //console.log(JSON.parse("[" + globalCookie + "]")[0].item_code);
});

function HTML_ACCEPTED (req, res, next) { return req.accepts("html") ? next() : next("route") }
function JSON_ACCEPTED (req, res, next) { return req.accepts("json") ? next() : next("route") }

module.exports = router;
