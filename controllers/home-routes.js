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

// Dashboard of user posts
router.get('/dashboard', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            const dbPostData = await Post.findAll({
                where: {
                    user_id: req.session.userId
                },
                include: [
                    {
                        model: User,
                    },
                ],
            });
            const posts = dbPostData.map((post) => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: req.session.loggedIn });
        } else {
            res.redirect('/login');
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error loading", error });
    }
});

// Edit user posts
router.get('/edit/:id', async (req, res) => {
    try {
        
        const dbPostData = await Post.findByPk(req.params.id, {
            where: {
                user_id: req.session.userId
            },
            include: [User]
        });

        const post = dbPostData.get({ plain: true });
        console.log(post);
        res.render('edit', { post, loggedIn: req.session.loggedIn });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error loading the edit page", error });
    }
})

// GET one post
router.get('/posts/:id', async (req, res) => {
    try {
        const dbPostData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User, 
                },
                {
                    model: Comment,
                    include: [
                        {
                            model: User
                        }
                    ]
                }
            ]
        });

        const post = dbPostData.get({ plain: true });
        res.render('post', { post, loggedIn: req.session.loggedIn });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error loading", error });
    }
});

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    };
    res.render('login');
});

module.exports = router;