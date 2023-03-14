const {Router} = require('express');
const path = require('path');

const router = Router();

router.get('/user', (req, res, next) => {
    res.sendFile(path.join(process.cwd(), 'public', 'pages', 'user.html'))
})

module.exports = router;