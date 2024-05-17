const express = require('express');
const { check } = require('express-validator');

const userSignupcontroller = require('./../Controllers/user-signup-controller.jsx');
const router = express.Router();

router.get('/', userSignupcontroller.getUsers);

router.post(
  '/signup', 
  [
    check('name').not().isEmpty(),
    check('number').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min: 6})
  ],
  userSignupcontroller.signup
);

router.post('/login', userSignupcontroller.login);

module.exports = router;