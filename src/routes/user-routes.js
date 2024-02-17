const express = require('express');
const router = express.Router();
const userController = require('../controller/user-controller');
const userMiddleware = require('../middleware/user-middleware');

router.post('/create-user', userMiddleware.validateUserData, userController.createUser);

router.get('/find/:idOrEmail',  userController.getUser);

router.put('/update/:id',userMiddleware.authenticateUserUpdate, userController.updateUser);

router.put('/update/:id',userMiddleware.authenticateUserUpdatePassword, userController.updateUserPassword);

router.delete('/delete/:id', userController.deleteUser);

module.exports = router;

