const router = require('express').Router();
const { Post } = require('../../models');

// Create a new post
router.post('/', async (req, res) => {
    try {
        const dbPostData = await Post.create({
            description: req.body.description,
            user_id: req.session.userId, 
        });
        res.status(200).json(dbPostData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error posting", error })
    }
});

module.exports = router;