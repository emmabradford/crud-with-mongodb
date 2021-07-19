const express = require('express');
const mongoose = require('mongodb');
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

mongoose.connect('mongodb+srv://emma:<password>@untamedcluster.fhw2j.mongodb.net/test', 
    { useNewUrlParser: true },
    () => console.log('untamed shit post has started!')
);

app.listen(3000);