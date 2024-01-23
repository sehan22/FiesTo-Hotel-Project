const multer = require('multer');
const upload = multer();
const RestaurantItem = require('../model/RestaurantItem')

const ProductController = {

    // const {productList}
/*
    const {productsList} = require("../constants/const");
    const Order = require('../model/Order');

    const orderController={

        saveOrder: async function (req, res, next) {
            try {
                const orderData = req.body;

                const order = await Order.create(orderData);

                res.status(200).json(order);

            }catch (err){
                console.error(err);
                res.status(500).json({error: 'something went wrong !'});
            }
        },

    }

    module.exports=orderController;*/

    getAllRestaurantItem: async function (req, res, next) {
        try {
            const restaurantItemsList = await RestaurantItem.find();
            res.status(200).json(restaurantItemsList);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!'})
        }
    },

    saveRestaurantItem: async function (req, res, next) {
        try {
            const restaurantItemData = req.body;

            // Check if a file was uploaded
            if (req.file) {
                // Assuming profileImgUrl is a file field
                restaurantItemData.image = req.file.buffer.toString('base64'); // Store the file as base64 string
            }

            const restaurantItem = await RestaurantItem.create(restaurantItemData);
            res.status(200).json(restaurantItem);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!' + err.message});
        }
    },

    getRestaurantItem: async function (req, res, next) {
        try {
            const restaurantItemId = req.params.id;
            const restaurantItem = await RestaurantItem.findOne({id: restaurantItemId});
            res.status(200).json(restaurantItem);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!'});
        }
    },

    updateRestaurantItem: async function (req, res, next) {
        try {
            const restaurantItemId = req.params.id;
            const restaurantItemData = req.body;

            // Check if a file was uploaded
            if (req.file) {
                // Assuming profileImgUrl is a file field
                restaurantItemData.image = req.file.buffer.toString('base64'); // Store the file as base64 string
            }

            const updatedRestaurantItem = await RestaurantItem.findOneAndUpdate(
                {
                    id: restaurantItemId
                }
                , restaurantItemData,
                {new: true});

            if (!updatedRestaurantItem) {
                return res.status(404).json({error: 'Product Not Found'});
            }

            res.status(200).json(updatedRestaurantItem);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'something went wrong !'});
        }
    },

    deleteRestaurantItem: async function (req, res, next) {
        try {
            const restaurantItemId = req.params.id;
            const result = await RestaurantItem.deleteOne({id: restaurantItemId});
            if (result.deletedCount === 0) {
                return res.status(404).json({error: 'Restaurant Item not found!'});
            }
            res.status(200).json({message: 'Product deleted successfully!'});

        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!'});
        }
    }
}

module.exports = ProductController;
