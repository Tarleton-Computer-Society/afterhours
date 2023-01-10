const httpStatus = require('http-status');

exports.me = (req, res) => {
    // console.log(req)
    return res.json({
        id: req.user.id,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email: req.user.email,
        
    });
};