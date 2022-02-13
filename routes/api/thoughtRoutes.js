const router = require('express').Router();
const { addThought, 
    addReaction, 
    removeThought, 
    removeReaction,
    getThoughts } = require('../../controllers/thoughtController');

// /api/thoughts GET all thoughts
router.route('/').get(getThoughts);

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<thoughtId>
router
.route('/:thoughtId/reactions')
.post(addReaction);

router.
route('/:thoughtId/:reactionId')
.delete(removeReaction);


// /api/thoughts/<thoughtId>/<reactionId> DELETE reaction
router
.route('/:thoughtId/')
.delete(removeThought);

// /api/thoughts/<userId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router;