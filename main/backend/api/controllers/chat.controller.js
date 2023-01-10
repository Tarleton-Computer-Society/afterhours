const httpStatus = require('http-status');
const Chat = require('../models/chat');

exports.allchats= (req, res) => {
    Chat.find({typeid:req.body.id}).then(groups => {
    return res.json(groups);
  }
    )

};

exports.sendmessage = (req, res) => {
    const { message,fromid,fromname,typeid,type } = req.body;
    const newMessage = new Chat({
        message:message,
        fromid:fromid,
        fromname:fromname,
        typeid:typeid,
        type:type
    })
    newMessage.save()
    return res.json({
        message: 'ok'
    });
}
//
 
