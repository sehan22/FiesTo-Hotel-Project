var express = require('express');
var router = express.Router();
const restaurantController = require('../controller/RestaurantController')

const multer = require('multer');
const upload = multer();

/*GET - Get all Product*/
router.get('/all', restaurantController.getAllRestaurantItem);
router.post('/save', upload.single('image'), restaurantController.saveRestaurantItem);
router.get('/find/:id', restaurantController.getRestaurantItem);
router.put('/update/:id', upload.single('image'), restaurantController.updateRestaurantItem)
router.delete('/delete/:id', restaurantController.deleteRestaurantItem);
router.get('/lastRestaurantItemId', restaurantController.getLatestRestaurantOrderId)

module.exports = router;
