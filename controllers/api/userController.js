const router = require('express').Router();
const { User } = require('../../models');

// Login 
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                username: req.body.username
            },
        });

        if (!dbUserData) {
            res.status(400).json({ msg: "Incorrect email or password. Please try again!" });
        };

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ msg: "Incorrect email or password. Please try again!" });
        };

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = dbUserData.id;
            res.status(200).json({ user: dbUserData, msg: "You are now logged in!" });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error loading", error })
    }
});

// Signup
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.userId = dbUserData.id;
            res.status(200).json(dbUserData);
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error loading", error })
    }
})

// Logout
router.post('/logout', (req, res) => {
    console.log('check');
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;