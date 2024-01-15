var express = require('express');
const UserController = require('../controller/UsersController');
var router = express.Router();

router.get('/all', UserController.getAllUsers);
router.post('/save', UserController.saveUser);
router.put('/update/:username', UserController.updateUser);
router.delete('/delete/:username', UserController.deleteUser);
router.get('/find/:username', UserController.getUser);

module.exports = router;
