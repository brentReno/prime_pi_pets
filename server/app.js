var express = require('express');
var app = express();
var path = require('path');
var petsRouter = require('./routers/petRouter');
var mongoose=require('mongoose');
var mongoURI = "mongodb://localhost:27017/piPets";
var MongoDB = mongoose.connect(mongoURI).connection;
var Pets = require('./models/pets.js');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// set port
app.set("port", (process.env.PORT || 3005));

// mongo db connection error handeling
MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

//spin up the server
app.listen(app.get("port"), function(){
  console.log("I'm listening.... on:", app.get("port"));
});//end spin up server

//cbase hit
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('server/public/views/index.html'));
});

//set public folder to static
app.use(express.static('server/public/'));

//get all pets route
app.get('/pets', function(req, res) {
  console.log("in get pets");
  Pets.find({}, function(err, petsResults) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }else{
      res.send(petsResults);
    }
  });
});// end get route

//Add new pet route
app.post('/newPet', function(req, res){
  // get data from body
  var sentData = req.body;
  console.log('sentData:',sentData);
  //create new assignment object from schema
  var newPet = new Pets({
    petName: sentData.petName,
    petType: sentData.petType,
    petAge:  sentData.petAge,
    picLink: sentData.picLink
  });// end create newPet
  // save newPet in database
  newPet.save(function(err){
      if(err){
        console.log('error occurred:', err);
        res.sendStatus(500);
      } else {
        console.log('newPet saved successfully!');
        res.sendStatus(201);
      }// end if else
    });// end Pet save
}); // end post route

//delete Pete
app.delete('/pets', function(req, res){
  console.log('hit delete route with:',req.body);
  Pets.findByIdAndRemove({"_id":req.body._id}, function(){
    console.log("Pet "+ req.body.id +" has been deleted.");
    res.send(200);
  });// end callback
});// end delete
