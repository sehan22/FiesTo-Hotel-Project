const {productsList} = require('../constants/const');

const ProductController = {
    submitProductsDetails: function (req, res, next) {
        res.send(productsList);
    }
}

module.exports = ProductController;
