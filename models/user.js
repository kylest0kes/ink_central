
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    email: {
        type: String,
        required: 'Email address is required',
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email address']
    },
    created: { type: Date, required: true, default: Date.now() },
    // create values for 
        // password (!!!! make sure you encrypt the password !!!!)
        // name
        // username
        // age
        // gender
        // location
        // artist or client
        // "liked"
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);