const HttpError = require('../models/http-error');  
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const OwnerSignup = require('../models/Owner-signup'); // IMPORTANT

const getUsers = async (req, res) => {
  let users;
  try {
    users = await OwnerSignup.find({}, '-password'); // this will find all the users in the database
  } catch (err) {
    return next(new HttpError('Fetching users failed, please try again later.', 500));
  }

  res.json({ users: users.map(user => user.toObject({ getters: true })) });
}


const signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  const { name, number, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await OwnerSignup.findOne({ email: email });
  } catch (err) {
    const error = new HttpError('Signing up failed, please try again later.', 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError('User exists already, please login instead.', 422);
    return next(error);
  }

  const createdUser = new OwnerSignup({
    name,
    number,
    email,
    password
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError('Signing up failed, please try again.', 500);
    return next(error);
  }

  res.status(201).json({ ownersignup: createdUser.toObject({ getters: true }) });
}


const login = async (req, res, next) => {
  const { email, password } = req.body;
  
  let identifiedUser;
  try {
    identifiedUser = await OwnerSignup.findOne({ email: email });
  } catch (err) {
    const error = new HttpError('Logging in failed, please try again later.', 500);
    return next(error);
  }
  
  if (!identifiedUser || identifiedUser.password !== password) {
    const error = new HttpError('Invalid credentials, could not log you in.', 403);
    return next(error);
  }

  res.json({message: 'Logged in!'});
}

module.exports = { signup, getUsers, login };