const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

router.route('/trips').get(tripsController.tripsList); //Get method routes triplist
router.route('/trips/:tripCode').get(tripsController.tripsFindByCode); //Get method routes triplist

module.exports = router;