 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');
 const passport = require('passport');

 const httpStatus = require('http-status');
 const User = require('../models/user')
 exports.register = (req, res) => {
     const { firstname, lastname, email, password } = req.body;

     newUser = new User({
         firstname: firstname,
         lastname: lastname,
         email: email,
     })
     return res.json({
         register: 'ok'
     });
 };