const express = require('express');
const { check } = require('express-validator');

const ownerController = require('../Controllers/owner-controllers')
const router = express.Router();

router.get('/:fname', ownerController.getOwnerId);

router.post(
  '/', 
  [
    check('fname').not().isEmpty(),
    check('lname').not().isEmpty(),
    check('email').not().isEmpty().isLength({min: 5}),
    check('address').not().isEmpty().isLength({min: 5}),
    check('zipcode').not().isEmpty(),
    check('validId').not().isEmpty(),
    check('businesspermit').not().isEmpty(),
  ],
  ownerController.registerOwner
);

module.exports = router;