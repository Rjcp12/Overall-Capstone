const HttpError = require('../models/http-error');  
const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const Owner = require('../models/owner'); 

const getOwnerId = async (req, res, next) => {
  const fname = req.params.fname; 
 
  let owner;

  try {
    owner = await Owner.findOne({ fname: fname });
  } catch (err) {
    const error = new HttpError('Could not find a owner for the first name.', 500);
    return next(error); 
  } // this will save the place to the database

  if (!owner) {
    const error = new HttpError('Could not find a place for the provided id.', 404);
    return next(error);
  } 

  res.json({owner: owner.toObject({getters: true})}); // this will return the place object as a normal object
}

const registerOwner = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log(errors);
    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  const { fname, lname, email, address, number, zipcode, validId, businesspermit } = req.body;

  let existingOwner;
  try {
    existingOwner = await Owner.findOne({ address: address });
  } catch (err) {
    const error = new HttpError('Registered failed, please try again later.', 500);
    return next(error);
  }

  if (existingOwner) {
    const error = new HttpError('Address exists already.', 422);
    return next(error);
  }

  const createdOwer = new Owner({
    fname,
    lname,
    email,
    address,
    number,
    zipcode,
    validId,
    businesspermit
  });

  try {
    await createdOwer.save();
  } catch (err) {
    const error = new HttpError('Registered failed, please try again.', 500);
    return next(error);
  }

  res.status(201).json({ owner: createdOwer.toObject({ getters: true }) });
}

module.exports = {getOwnerId, registerOwner}