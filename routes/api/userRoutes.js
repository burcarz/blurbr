const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

// GET all and POST routes /api/users
router
.route('/')
.get(getAllUsers)
.post(createUser);

// GET one, PUT, DELETE /api/users/:id
router
.route('/:userId')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// PUT friend
router
.route('/:userId/:friendId')
.put(addFriend)
.delete(deleteFriend);

module.exports = router;