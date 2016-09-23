var express = require('express');
var app = express();
var path = require('path');

// set port
app.set("port", (process.env.PORT || 3005));

//spin up the server
app.listen(app.get("port"), function(){
  console.log("I'm listening.... on:", app.get("port"));
});//end spin up server

//catch all route
app.get("/*", function(req, res){
  console.log("In the catch all route");
  console.log("Here is the property:", req.params[0]);
  //if param 0 has no value, send the index
  var file = req.params[0] || "/views/index.html";
  //stringthat points to necessary file
  res.sendFile(path.join(__dirname, "/public/", file));
});//end catch all
