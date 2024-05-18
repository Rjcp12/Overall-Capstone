const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const reservationSchema = new Schema({
  fullname: {type: String, required: true},
  number: {type: Number, required: true},
  email: {type: String, required: true},
  request: {type: String},
  startdate: {type: Date, unique: true, required: true},
  enddate: {type: Date, unique: true, required: true},
});

reservationSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Reservation', reservationSchema); // this will create a model called Place based on the schema placeSchema