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
            const orderId = req.params.username;
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
            const orderId = req.params.orderId;
            const order = await Order.findOne({orderId: orderId});

            if (!order) {
                return res.status(404).json({error: "User Not Found!"});
            }

            return res.status(200).json(order);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!' + err});
        }
    },

    getLatestOrder: async function (req, res, next) {
        try {
            const latestOrder = await Order.findOne().sort({ timestampField: 1 }).limit(1);

            if (!latestOrder) {
                return res.status(200).json({ "orderId": "OID00 - 001" });
            }

            const orderId = latestOrder.orderId; // Assuming 'id' is the attribute you want

            return res.status(200).json({ orderId });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Something Went Wrong!' + err });
        }
    }


}


module.exports = UsersController;
