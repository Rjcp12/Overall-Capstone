const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const ownerSignupSchema = new Schema({
  name: {type: String, required: true},
  number: {type: Number, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

ownerSignupSchema.plugin(uniqueValidator);

module.exports = mongoose.model('OnwerSignup', ownerSignupSchema); // this will create a model called Place based on the schema placeSchema