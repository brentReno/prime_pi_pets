var express = require('express');
var app = express();
var path = require('path');

// set port
app.set("port", (process.env.PORT || 3005));

//spin up the server
app.listen(app.get("port"), function(){
  console.log("I'm listening.... on:", app.get("port"));
});
