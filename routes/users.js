const router = require('express').Router();
const userController = require('../controllers/users');

router.get('/', userController.getAllUsers);

router.get('/:id', userController.getUserById);

module.exports = router;