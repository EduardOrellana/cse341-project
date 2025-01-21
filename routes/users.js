const router = require('express').Router();
const userController = require('../controllers/users');

//Get all users
router.get('/', userController.getAllUsers);

//Get one user by id
router.get('/:id', userController.getUserById);

//create a user
router.post('/', userController.createUser);

//delete a user
router.delete('/:id', userController.deleteUser);


//update a user
router.put('/:id', userController.updateUser);

module.exports = router;