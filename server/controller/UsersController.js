const User = require('../model/User');
const Product = require("../model/Product");

const UsersController = {

    getAllUsers: async function (req, res, next) {
        try {
            const userList = await User.find();
            res.status(200).json(userList);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wring!' + err});
        }
    },

    saveUser: async function (req, res, next) {
        try {
            const userData = req.body;
            const user = await User.create(userData);
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!' + err});
        }
    },

    updateUser: async function (req, res, next) {
        try {
            const userName = req.params.username;
            const userData = req.body;

            const updatedUser = await User.findOneAndUpdate(
                {
                    username: userName
                },
                userData, {new: true}
            );

            if (!updatedUser) {
                return res.status(404).json({error: "Product Not Found!"});
            }

            res.status(200).json(updatedUser);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!' + err});
        }
    },

    deleteUser: async function (req, res, next) {
        try {
            const userName = req.params.username;
            const result = await User.deleteOne(
                {
                    username: userName
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

    getUser: async function (req, res, next) {
        try {
            const userName = req.params.username;
            const user = await User.findOne({username: userName});

            if (!user) {
                return res.status(404).json({error: "User Not Found!"});
            }

            return res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json({error: 'Something Went Wrong!'});
        }
    },
}

module.exports = UsersController;
