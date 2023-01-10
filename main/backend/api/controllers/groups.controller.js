const httpStatus = require('http-status');
const Group = require('../models/groups');

exports.allgroups= (req, res) => {
  Group.find().then(groups => {
    return res.json(groups);
  }
    )

};

exports.joingroup = (req, res) => {
    const { groupname } = req.body;
    
    Group.findOne({name: groupname})
    .then(group => {
      if (group) {
        if (!group.members.includes(req.body.id)) {
          group.members.push(req.body.id);
          group.save().then(() => {
            res.json({ message: 'ok' });
          });
        }
      }
    });
  
};
