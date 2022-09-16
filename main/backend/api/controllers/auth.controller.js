 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');
 const passport = require('passport');
 const validateRegisterInput = require('../validation/register');
 const validateLoginInput = require('../validation/login');
 const httpStatus = require('http-status');

 exports.register = (req, res) => {
     res.status(httpStatus.OK);
     return res.json({
         register: 'ok'
     });
 };