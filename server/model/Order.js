const mongoose = require('mongoose');

const OrderModel = mongoose.Schema(
    {
        "orderId": {
            require: true,
            type: String,
            unique: true,
            index: true,
        },
        "customer": {
            require: true,
            type: String
        },
        "items": {
            require: true,
            type: [],
        },
        "delivery": {
            require: true,
            type: Boolean
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
        },
        "status": {
            require: true,
            type: String
        }
    },
    {versionKey: false}
);

const Order = mongoose.model('Order', OrderModel);

module.exports = Order;
