var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var petSchema = new Schema({
  petName: String,
  petType: String,
  petAge: String,
  picLink: String
});

var Pets = mongoose.model('pets', petSchema);

module.exports = Pets;
