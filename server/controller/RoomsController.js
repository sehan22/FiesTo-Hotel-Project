const multer = require('multer');
const {productsList} = require("../constants/const");

const RoomsController = {

    getAllRestaurantItem: async function (req, res, next) {
        try {
            res.status(200).json(productsList);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!'})
        }
    },
}

module.exports = RoomsController;
