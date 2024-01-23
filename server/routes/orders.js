var express = require('express');
const OrderController = require('../controller/OrdersController');
var router = express.Router();

const multer = require('multer');
const upload = multer();

router.get('/all', OrderController.getAllOrders);
router.post('/save', upload.single('paymentSlipImg'), OrderController.saveOrder);
router.put('/update/:orderId', upload.single('paymentSlipImg'), OrderController.updateOrder);
router.delete('/delete/:orderId', OrderController.deleteOrder);
router.get('/find/:orderId', OrderController.getOrder);

module.exports = router;
