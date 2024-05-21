const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const superAdminSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

superAdminSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Superadmin', superAdminSchema); // this will create a model called Place based on the schema placeSchema