const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userSignupSchema = new Schema({
  name: {type: String, required: true},
  number: {type: Number, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

userSignupSchema.plugin(uniqueValidator);

module.exports = mongoose.model('UserSignup', userSignupSchema); // this will create a model called Place based on the schema placeSchema