const router = require('express').Router();
const { Comment } = require('../../models');

// Create Comment
router.post('/', async (req, res) => {
    try {
        const dbCommentData = await Comment.create({
            description: req.body.description,
            user_id: req.session.userId,
            post_id: req.body.index,
        });
        res.status(200).json(dbCommentData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error posting comment", error });
    }
});

module.exports = router;