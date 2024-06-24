const HttpError = require('../models/http-error');  
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const reservation = require('../models/reservation');

const getReservation = async (req, res) => {
  let users;
  try {
    users = await reservation.find({}, '-username'); // this will find all the users in the database
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

  const { fullname, number, email,request ,startdate ,enddate, resort } = req.body;


  let existingReservations;
  try {
    existingReservations = await reservation.find({
      resort: resort,
      $or: [
        { startdate: { $lte: enddate }, enddate: { $gte: startdate } },
        { startdate: { $gte: startdate, $lte: enddate } },
      ],
    });
  } catch (err) {
    const error = new HttpError('Booking failed, please try again later.', 500);
    return next(error);
  }
  
  if (existingReservations.length > 0) {
    const error = new HttpError('A reservation with overlapping dates already exists.', 422);
    return next(error);
  }
  
  const reserveUser = new reservation({
    fullname,
    resort,
    number,
    email,
    request,
    startdate,
    enddate,
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

const deleteReservation = async (req, res, next) => {
  const reservationId = req.params.rid;

  let reservation;
  try {
    reservation = await reservation.findById(reservationId);
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete reservation.', 500);
    return next(error);
  }

  if (!reservation) {
    const error = new HttpError('Could not find reservation for this id.', 404);
    return next(error);
  }

  try {
    await reservation.remove();
  } catch (err) {
    const error = new HttpError('Something went wrong, could not delete reservation.', 500);
    return next(error);
  }

  res.status(200).json({ message: 'Deleted reservation.' });
}


module.exports = { getReservation, booking, deleteReservation };