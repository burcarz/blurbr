const router = require('express').Router();
const { addThought, 
    addReaction, 
    removeThought, 
    removeReaction,
    getThoughts,
    getThoughtById } = require('../../controllers/thoughtController');

// /api/thoughts GET all thoughts
router.route('/').get(getThoughts);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
.route('/:thoughtId/reactions')
.post(addReaction);

router.
route('/:thoughtId/reactions/:reactionId')
.delete(removeReaction);


// /api/thoughts/<thoughtId>/<reactionId> DELETE reaction
router
.route('/:thoughtId')
.get(getThoughtById);

// /api/thoughts/<userId>/<thoughtId>
router
.route('/:userId/:thoughtId')
.delete(removeThought);

module.exports = router;