const express = require('express');
const { check } = require('express-validator');

const superAdminController = require('./../Controllers/superadmin-controller');
const router = express.Router();

router.post(
  '/signup', 
  [
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min: 6})
  ],
  superAdminController.signup
);

router.post('/login', superAdminController.login);

module.exports = router;