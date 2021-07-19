const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    partner: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);