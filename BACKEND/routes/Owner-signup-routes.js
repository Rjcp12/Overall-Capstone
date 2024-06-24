const express = require('express');
const { check } = require('express-validator');

const ownerSignupcontroller = require('../Controllers/Owner-signup-controller.js');
const router = express.Router();

router.get('/', ownerSignupcontroller.getUsers);

router.post(
  '/signup', 
  [
    check('name').not().isEmpty(),
    check('number').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min: 6})
  ],
  ownerSignupcontroller.signup
);

router.post('/login', ownerSignupcontroller.login);

module.exports = router;