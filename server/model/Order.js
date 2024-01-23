const mongoose = require('mongoose');

const OrderModel = mongoose.Schema(
    {
        "orderId": {
            require: true,
            type: String,
            unique: true,
            index: true
        },
        "customer": {
            require: true,
            type: String
        },
        "items": {
            require: true,
            type: [],
        },
        "shippingAddress": {
            require: false,
            type: String
        },
        "paymentSlipImg": {
            require: false,
            type: String
        },
        "subTotal": {
            require: true,
            type: Number,
        },
        "deliveryCost": {
            type: Number
        },
        "discount": {
            type: Number
        },
        "total": {
            require: true,
            type: Number
        }
    },
    {versionKey: false}
);

const Order = mongoose.model('Order', OrderModel);

module.exports = Order;
