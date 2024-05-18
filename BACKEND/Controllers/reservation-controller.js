const HttpError = require('../models/http-error');  
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const reservation = require('../models/reservation');

const getReservation = async (req, res) => {
  let users;
  try {
    users = await reservation.find({}, '-password'); // this will find all the users in the database
  } catch (err) {
    return next(new HttpError('Fetching users failed, please try again later.', 500));
  }

  res.json({ users: users.map(user => user.toObject({ getters: true })) });
}

const booking = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  const { fullname, number, email,request ,startdate ,enddate } = req.body;

  let existingReservation;
  try {
    existingReservation = await reservation.findOne({ startdate: startdate, enddate: enddate });
  } catch (err) {
    const error = new HttpError('Booking failed, please try again later.', 500);
    return next(error);
  }

  if (existingReservation) {
    const error = new HttpError('A reservation with the same start date and end date already exists.', 422);
    return next(error);
  }

  const reserveUser = new reservation({
    fullname,
    number,
    email,
    request,
    startdate,
    enddate
  });

  try {
    await reserveUser.save();
  } catch (err) {
    console.error('Error saving reservation:', err);
    const error = new HttpError('Booking failed, please try again.', 500);
    return next(error);
  }

  res.status(201).json({ reservations: reserveUser.toObject({ getters: true }) });
}


module.exports = { getReservation, booking };