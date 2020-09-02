const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema({
    title: {
        type: String,
        required: "You must give your post a Title!"
    },
    description: {
        type: String,
        required: "Please provide a description!"
    },
    image: String,
    author:
    {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
    ,
    type: {
        type: String,
        required: "Please select if you are looking for ink or if you have artwork available"
    },
    user: {
        type: String,
        required: "You need a username"
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model('Post', Post);