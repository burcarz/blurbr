const router = require('express').Router();
const { addThought, addReaction, removeThought, removeReaction }= require('../../controllers/thoughtController');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
.route('/:userId/:thoughtId')
.put(addReaction)
.delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router;