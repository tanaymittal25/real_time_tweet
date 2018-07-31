const router = require('express').Router();
const User = require('../models/user');

router.get('/', (req, res, next) => {
    res.render('main/landing');
});

router.get('/create-new-user', (req, res, next) => {
    var user = new User();
    
})

module.exports = router;