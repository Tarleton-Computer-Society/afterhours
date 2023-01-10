// make model for group schema

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChatSchema = new Schema({
 
  
   typeid: {
        type: String,
        required: true,
    },
   
 
    fromid: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    fromname: {
        type: String,
        required: true
    },
  
    date: {
        type: Date,
        default: Date.now
    },
});

const Chat = mongoose.model('chats', ChatSchema);


module.exports = Chat

    