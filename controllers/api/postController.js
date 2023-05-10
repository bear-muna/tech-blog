const router = require('express').Router();
const { Post } = require('../../models');

// Create a new post
router.post('/', async (req, res) => {
    try {
        const dbPostData = await Post.create({
            description: req.body.description,
            user_id: req.session.userId, 
            time_created: new Date()
        });
        res.status(200).json(dbPostData);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error posting", error })
    }
});

// Update post
router.put('/', async (req, res) => {
    try {
        const updatePost = await Post.update({
            description: req.body.editDescription,
        }, {
            where: {
                id: req.body.index
            }
        });
        if (!updatePost[0]) {
            return res.status(404).json({ msg: "Post is not found" });
        }
        res.json(updatePost);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error updating post", error });
    }
});

// Delete Post
router.delete('/', async (req, res) => {
    try {
        const delPost = await Post.destroy({
            where: {
                id: req.body.index
            },
        });
        if(!delPost) {
            return res.status(404).json({ msg: "Post does not exist in db" })
        }
        res.status(200).json(delPost);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error deleting", error })
    }
})

module.exports = router;