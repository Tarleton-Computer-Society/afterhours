const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Addition of  the Schema for the User model

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: 'user'

    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isverified: {
        type: Boolean,
        default: false
    },
    major:{
        type:String,
    },
    minor:{
        type:String,
    },
    groups:{
        type:Array,
        
    },

    date: {
        type: Date,
        default: Date.now
    },

});

const User = mongoose.model('users', UserSchema);

module.exports = User