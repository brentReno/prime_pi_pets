var express = require("express");
var router = express.Router();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var Pets = require('../models/pets.js');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());



//get all pets route
router.get('/', function(req, res) {
  Pets.find({}, function(err, petsResults) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      res.send(petsResults);
    }
  });
});// end get

  module.exports = router;
