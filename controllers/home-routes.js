const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
    try {
        const dbPostsData = await Post.findAll({
            include: [
                {
                    model: User,
                },
            ],
        });

        const posts = dbPostsData.map((post) => post.get({ plain: true }));

        console.log(posts);

        res.render('homepage', {
            posts, loggedIn: req.session.loggedIn,
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error loading", error })
    }
});

// GET one post
router.get('/posts/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                }, 
            ],
        });

        const post = dbPostData.get({ plain: true });
        console.log(post);
        res.render('post', { post, loggedIn: req.session.loggedIn });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error loading", error });
    }
})

module.exports = router;