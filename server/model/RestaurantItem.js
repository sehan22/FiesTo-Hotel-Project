const mongoose = require('mongoose');

const ProductModel = mongoose.Schema(
    {
        "id": {
            require: true,
            type: String,
            unique: true,
            index: true
        },
        "image": {
            require: true,
            type: String
        },
        "name": {
            require: true,
            type: String
        },
        "rating": {
            require: true,
            type: Number
        },
        "description": {
            require: true,
            type: String
        },
        "price": {
            require: true,
            type: Number
        },
        "currency": {
            require: true,
            type: String
        },
        "itemQTY": {
            require: true,
            type: Number
        }
    }
);

const Product = mongoose
    .model('Restaurant',
        ProductModel);

module.exports = Product;
