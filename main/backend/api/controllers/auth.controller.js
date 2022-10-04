 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');
 const passport = require('passport');

 const httpStatus = require('http-status');
 const User = require('../models/user')
 exports.register = (req, res) => {
     const { firstname, lastname, email, password } = req.body;
     User.findOne({ email }).then(user => {
         if (user) {
             return res.status(400).json({ email: "Email already exists" });
         } else {
             newUser = new User({
                 firstname: firstname,
                 lastname: lastname,
                 email: email,
                 password: bcrypt.hashSync(password, 10)

             })
             newUser.save()
             return res.json({
                 register: 'ok'
             });
         }

     })
 }