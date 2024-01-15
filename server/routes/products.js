var express = require('express');
const ProductsController = require('../controller/ProductsController');
var router = express.Router();

/* GET all products listing. */
// http://localhost:4000/products/save
router.get('/all',
    ProductsController.getAllProducts);

router.post('/save',
    ProductsController.saveProduct);

router.get('/find/:id',
    ProductsController.getProduct);

router.put('/update/:id',
    ProductsController.updateProduct)

router.delete('/delete/:id',
    ProductsController.deleteProduct)

module.exports = router;
