const express = require('express');
const router  = express.Router();
const Post = require('../models/Posts');

router.get('/', (req, res) => {
    res.send('untamed shit post is on posts');
});

router.post('/', (req, res)=> {
    console.log(req.body);
    const post = new Post({
        name: req.body.name,
        title: req.body.title,
        partner: req.body.partner
    });

    post.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        });
});

module.exports = router;