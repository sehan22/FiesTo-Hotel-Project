var express = require('express');
const UserController = require('../controller/UsersController');
var router = express.Router();

const multer = require('multer');
const upload = multer();

router.get('/all', UserController.getAllUsers);
router.post('/save', upload.single('profileImgUrl'), UserController.saveUser);
router.put('/update/:username', upload.single('profileImgUrl'), UserController.updateUser);
router.delete('/delete/:username', UserController.deleteUser);
router.get('/find/:username', UserController.getUser);

module.exports = router;
