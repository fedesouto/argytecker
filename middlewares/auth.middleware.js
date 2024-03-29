const isLoggedIn = (req, res, next) => {
    if(!req.user) {
        res.redirect('/auth/login')
    }
    else next()
}

module.exports = isLoggedIn;