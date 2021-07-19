const express = require('express');
const mongoose = require('mongodb');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

const postsRoute = require('./routes/posts');
app.use(bodyParser.json());
app.use('/posts', postsRoute);

app.get('/', (req, res ) => {
    res.send('this is the home of the untamed shit post!');
});

mongoose.connect(process.env.MONGODB, 
    { useNewUrlParser: true },
    () => console.log('untamed shit post has started!')
);

app.listen(3000);