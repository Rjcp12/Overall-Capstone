const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const placeSchema = new Schema({
  fname: {type: String, required: true},
  lname: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  address: {type: String, required: true},
  number: {type: Number, required: true},
  zipcode: {type: Number, required: true},
  validId: {type: String, required: true},
  businesspermit: {type: String, required: true},

});

placeSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Owner', placeSchema); // this will create a model called Place based on the schema placeSchema