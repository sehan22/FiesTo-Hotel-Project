var express = require('express');
const RoomsController = require('../controller/RoomsController');
var router = express.Router();

router.get('/all', RoomsController.getAllRestaurantItem);

module.exports = router;
