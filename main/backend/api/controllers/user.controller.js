const httpStatus = require('http-status');

exports.me = (req, res) => {
    return res.json({
        id: req.user.id,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        email: req.user.email,
        username: req.user.username,
        role: req.user.role,
        isverified: req.user.isverified,
        canpin: req.user.canpin
    });
};