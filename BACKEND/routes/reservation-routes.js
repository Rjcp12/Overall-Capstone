const express = require('express');
const { check } = require('express-validator');

const reservationController = require('../Controllers/reservation-controller');
const router = express.Router();

router.get('/', reservationController.getReservation);

router.post(
  '/booking', 
  [
    check('fullname').not().isEmpty(),
    check('resort').not().isEmpty(),
    check('number').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('request').optional(),
    check('startdate').not().isEmpty(),
    check('enddate').not().isEmpty()
  ],
  reservationController.booking
);

router.delete('/:rid', reservationController.deleteReservation);


module.exports = router;