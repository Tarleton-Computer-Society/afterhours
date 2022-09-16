/**
 * Created by Vadym Yatsyuk on 13.08.18
 */
const httpStatus = require('http-status');

exports.health = (req, res) => {
    res.status(httpStatus.OK);
    return res.json({
        status: 'ok'
    });
};
exports.public = (req, res) => {
    res.status(httpStatus.OK);
    return res.json({
        status: 'Public route: ok'
    });
};

exports.post = (req, res) => {
    return res.status(httpStatus.CREATED).json({
        status: "ok",
    });
}