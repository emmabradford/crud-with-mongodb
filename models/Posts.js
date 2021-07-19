const mongoose = require('mongoose');
const { stringify } = require('querystring');

const PostSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    partner:{
        type:String,
        required:false
    }
});

module.exports = mongoose.model('Posts', PostSchema);