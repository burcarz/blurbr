const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/userController');
const { create } = require('../../models/User');

// GET all and POST routes /api/users
router
.route('/')
.get(getAllUsers)
.post(createUser);

// GET one, PUT, DELETE /api/users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

module.exports = router;