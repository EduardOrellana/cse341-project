const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAllUsers = async (req, res) => {
    //#swagger.tags = ['Users']
    try {
        const result = await mongodb.getDataBase().db().collection('contacts').find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

const getUserById = async (req, res) => {
    //#swagger.tags = ['Users']
    try {
        if (!ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: 'Invalid user ID format' });
        }
        const userId = new ObjectId(req.params.id);
        console.log(userId);
        const result = await mongodb.getDataBase().db().collection('contacts').findOne({ _id: userId });
        if (result) {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch user by ID' });
    }
};

const createUser = async (req, res) => {
    //#swagger.tags = ['Users']
    try {
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthDay: req.body.birthDay
        };

        const response = await mongodb.getDataBase().db().collection('contacts').insertOne(user);

        if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json(response.error || "Something went wrong");
        };
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

const deleteUser = async (req, res) => {
    //#swagger.tags = ['Users']
    try {
        const userId = new ObjectId(req.params.id);
        const response = await mongodb.getDataBase().db().collection('contacts').deleteOne({ _id: userId });

        if (response.deletedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to delete user' });
    }
};

const updateUser = async (req, res) => {
    //#swagger.tags = ['Users']
    try {
        const userId = new ObjectId(req.params.id);
        const user = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            favoriteColor: req.body.favoriteColor,
            birthDay: req.body.birthDay
        };

        const response = await mongodb.getDataBase().db().collection('contacts').replaceOne({ _id: userId }, user);

        if (response.modifiedCount > 0) {
            res.status(204).send();
        } else {
            res.status(404).json(response.error || "Something went wrong");
        };
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to create user' });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
};
