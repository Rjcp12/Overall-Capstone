const HttpError = require('../models/http-error');  
const { validationResult } = require('express-validator');
const superAdmin = require('./../models/superadmin'); // IMPORTANT

const signup = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  const { email, password } = req.body;

  const createdUser = new superAdmin({
    email,
    password
  });

  try {
    await createdUser.save();
  } catch (err) {
    console.error('Error saving user:', err);
    const error = new HttpError('Signing up failed, please try again.', 500);
    return next(error);
  }

  res.status(201).json({ superadmin: createdUser.toObject({ getters: true }) });
}

const login = async (req, res, next) => {
  const { email, password } = req.body;
  
  let identifiedUser;
  try {
    identifiedUser = await superAdmin.findOne({ email: email });
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

module.exports = { login, signup };