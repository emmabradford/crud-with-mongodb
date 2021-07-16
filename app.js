const express = require('express');

const app = express();

app.use('/posts', () => {
    console.log('the middle where is running of the untamed shit post');
});

app.get('/', (req, res ) => {
    res.send('this is the home of the untamed shit post!');
});

app.get('/posts', (req, res) => {
    res.send('this is the posts of the untamed shit post!');
});

app.listen(3000);