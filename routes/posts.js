const express = require('express');

const router  = express.Router();

router.get('/posts', (req, res) => {
    res.send('untamed shit post is on posts');
});

module.exports = router;