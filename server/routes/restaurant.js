var express = require('express');
var router = express.Router();
const productController = require('../controller/RestaurantController')

//
// router.get('/', function (req, res) {
//    res.send('Restaurant Router');
// });

/*GET - Get all Product*/
router.get('/all', productController.submitProductsDetails);

module.exports = router;
