const express = require('express');

const router  = express.Router();

router.get('/', (req, res) => {
    res.send('untamed shit post is on posts');
});

router.get('/specific', (req, res) => {
    res.send('Specific untamed ship post post');
});

module.exports = router;