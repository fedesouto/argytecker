const {Router} = require('express');
const passport = require('../services/auth.service');
const path = require('path')

const router = Router()

router.get('/login', (req, res, next) => {
    res.sendFile(path.join(process.cwd(), 'public', 'pages', 'login.html'));
})

router.post('/login', passport.authenticate("login", {failureRedirect: '/login'}), (req, res, next) => {
    res.redirect('/')
})

router.post('/signup', passport.authenticate("signup"), (req, res, next) => {
    res.json({newUser: req.user})
})

module.exports = router;