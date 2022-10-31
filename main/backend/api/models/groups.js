// make model for group schema

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GroupSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    members: {
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});

const Group = mongoose.model('groups', GroupSchema);


module.exports = Group

    