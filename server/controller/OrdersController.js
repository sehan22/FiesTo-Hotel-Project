const multer = require('multer');
const upload = multer();
const Order = require('../model/Order');

const UsersController = {

    getAllOrders: async function (req, res, next) {
        try {
            const userList = await Order.find();
            res.status(200).json(userList);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!' + err});
        }
    },

    saveOrder: async function (req, res, next) {
        try {
            const orderData = req.body;

            // Check if a file was uploaded
            if (req.file) {
                // Assuming profileImgUrl is a file field
                orderData.paymentSlipImg = req.file.buffer.toString('base64'); // Store the file as base64 string
            }

            const order = await Order.create(orderData);
            res.status(200).json(order);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!' + err});
        }
    },

    updateOrder: async function (req, res, next) {
        try {
            const orderId = req.params.orderId;
            const orderData = req.body;

            // Check if a file was uploaded
            if (req.file) {
                // Assuming profileImgUrl is a file field
                orderData.paymentSlipImg = req.file.buffer.toString('base64'); // Store the file as base64 string
            }

            const updatedOrder = await Order.findOneAndUpdate(
                {
                    orderId: orderId
                },
                orderData, {new: true}
            );

            if (!updatedOrder) {
                return res.status(404).json({error: "User Not Found!"});
            }

            res.status(200).json(updatedOrder);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!' + err});
        }
    },

    deleteOrder: async function (req, res, next) {
        try {
            const orderId = req.params.orderId;
            const result = await Order.deleteOne(
                {
                    username: orderId
                }
            );

            if (result.deletedCount === 0) {
                return res.status(404).json({error: 'User not found!'});
            }

            res.status(200).json({message: 'user deleted successfully!'});
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!' + err});
        }
    },

    getOrder: async function (req, res, next) {
        try {
            const customer = req.params.customer;
            const order = await Order.findOne({customer: customer});

            if (!order) {
                return res.status(404).json({error: "User Not Found!"});
            }

            return res.status(200).json(order);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!' + err});
        }
    },

    getOneUserAllOrders: async function (req, res, next) {
        try {
            const username = req.params.username;
            const orders = await Order.find({username: username});

            if (orders.length === 0) {
                return res.status(404).json({error: "No orders found for the customer."});
            }

            return res.status(200).json(orders);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!' + err});
        }
    },

    getLatestOrder: async function (req, res, next) {
        try {
            const latestOrder = await Order.findOne().sort({$natural: -1}).limit(1);

            let orderId = "OID00 - 001";

            if (!latestOrder) {
                return res.status(200).json({orderId});
            }

            /*const orderId = latestOrder.orderId;*/
            orderId = latestOrder.orderId
            const newOrderId = orderId.split(`OID00 - 00`);

            for (let i of newOrderId) {
                orderId = ++i;
            }

            let lastOrderIdLatNumber = orderId;
            orderId = "OID00 - 00" + (lastOrderIdLatNumber).toString();

            console.log(orderId)

            return res.status(200).json({orderId});
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!' + err});
        }
    }


}


module.exports = UsersController;
