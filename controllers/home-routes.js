const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: User,
                },
            ],
        });

        const posts = dbPostData.map((post) => post.get({ plain: true }));

        console.log(posts);
        
        res.render('homepage', {
            posts, loggedIn: req.session.loggedIn,
        });



    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error loading", error })
    }
});

module.exports = router;