const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    name: {
        type: String,
        required: "You need a name!"
    },
    age: {
        type: String,
        trim: true,
        required: "You need to provide your age!"
    },
    username: {
        type: String,
        trim: true,
        required: "You need a username!"
    },
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    location: {
        type: String,
        trim: true,
        required: "You need to provide your location!"
    },
    gender: {
        type: String,
        trim: true
    },
    created: { 
        type: Date, required: true, default: Date.now() 
    },
    artist: {
        type: Boolean,
        trim: true,
        required: "You need to let us know if you are an artist or a canvas!"
    },
    canvas: {
        type: Boolean,
        trim: true,
        required: "You need to let us know if you are an artist or a canvas!"
    },
    posts :[
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    // section for profile picture, not required so user can add after account creation
    profilePic: String
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);