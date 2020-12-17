const db = require('../config/database');
const Ride = db.Ride;

const getAllRides = async () => {
  return  await Ride.find();
};

const createRide = async (rideParam) => {
  const ride = new Ride(rideParam);
  await ride.save();
};

module.exports = {
  getAllRides,
  createRide
};
