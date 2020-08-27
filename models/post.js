const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

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
    author: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    type: {
        type: String,
        required: "Please select if you are looking for ink or if you have artwork available"
    },
    username: String
});

Post.plugin(passportLocalMongoose);

module.exports = mongoose.model('Post', Post);