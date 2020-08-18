
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
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
      },
    name: {
        type: String,
        required: "You need a name!"
    },
    username: {
        type: String,
        trim: true,
        required: "You need a username!"
    },
    age: {
        type: String,
        trim: true,
        required: "You need to provide your age!"
    },
    gender: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true,
        required: "You need to provide your location!"
    },
    userType: {
        type: String,
        trim: true,
        required: "You need to let us know if you are an artist or a canvas!"
    },
    liked: {
        type: Object
    }
});

User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

User.addHook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);