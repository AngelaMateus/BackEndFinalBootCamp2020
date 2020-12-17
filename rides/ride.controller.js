const express = require('express');
const router = express.Router();
const rideService = require('./ride.service');

const createRide = (req, res, next) => {
  rideService.createRide(req.body)
    .then(() => res.status(201).send(req.body))
    .catch(err => next(err));
};

const getAllRides = (req, res, next) => {
  rideService.getAllRides()
    .then(rides => {
      console.log('rides: ', rides);
      res.json(rides)
    })
    .catch(err => next(err));
};

// routes customers
router.post('/create', createRide);
router.get('/', getAllRides);

module.exports = router;