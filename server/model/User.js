const mongoose = require('mongoose');


const UserModel = mongoose.Schema(
    {
        "fullName": {
            require: true,
            type: String,
        },

        "email": {
            require: true,
            type: String,
        },

        "address": {
            require: true,
            type: String,
        },

        "contact": {
            require: true,
            type: Number,
        },

        "username": {
            require: true,
            type: String,
            unique: true,
            index: true
        },

        "password": {
            require: true,
            type: String,
        },

        "profileImgUrl": {
            require: true,
            type: String,
        },

    }
);

const User = mongoose.model('User', UserModel);

module.exports = User;
