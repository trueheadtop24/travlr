// app_api/controllers/trips.js

const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// Access the model


// GET: Return all trips
const tripsList = async (req, res) => {
  const q = await Model
    .find({})
    .exec();


  if (!q) {
    return res
      .status(404)
      .json(err);
  }
  else {
    return res
      .status(200)
      .json(q);
  }
};


const tripsFindByCode = async (req, res) => {
  const q = await Model
    .find({ code: req.params.tripcode })
    .exec();


  if (!q) {
    return res
      .status(404)
      .json(err);
  }
  else {
    return res
      .status(200)
      .json(q);
  }
};
module.exports = {
  tripsList,
  tripsFindByCode,
};