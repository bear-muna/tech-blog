const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// Session testing
router.get('/sessiondata', (req, res) => {
    res.json(req.session);
})

module.exports = router;