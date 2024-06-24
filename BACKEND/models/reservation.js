const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  fullname: { type: String, required: true },
  number: { type: Number, required: true },
  email: { type: String, required: true },
  resort: { type: String, required: true },
  request: { type: String },
  startdate: { type: Date, required: true },
  enddate: { type: Date, required: true },
});

module.exports = mongoose.model('Reservation', reservationSchema);
