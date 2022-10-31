 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');
 const passport = require('passport');

 const httpStatus = require('http-status');
 const User = require('../models/user')
 exports.register = (req, res) => {
     const { firstname, lastname, email, password,major } = req.body;
     User.findOne({ email }).then(user => {
         if (user) {
             return res.status(400).json({ message: "EAE4" });
         } else {
             newUser = new User({
                 firstname: firstname,
                 lastname: lastname,
                 email: email,
                 major:major,
                 password: bcrypt.hashSync(password, 10)

             })
             newUser.save()
             console.log(newUser)
             return res.json({
                 register: 'ok'
             });
         }

     })
 }
 exports.login = (req, res) => {
     const { email, password } = req.body;
     User.findOne({ email }).then(user => {
         if (!user) {
             return res.status(400).json({ message: "EAE41" });
         } else {
             bcrypt.compare(password, user.password)
                 .then(isMatch => {
                     if (!isMatch) {
                         return res.status(400).json({ message: "PI4" });
                     } else {
                         const payload = {
                             id: user._id,
                             firstname: user.firstname,
                             lastname: user.lastname,
                             email: user.email

                         }

                         jwt.sign(payload, 'secret', {
                             expiresIn: 3600
                         }, (err, token) => {
                             if (err) console.error('There is some error in token', err);
                             else {
                                 res.json({
                                     success: true,
                                     token: `Bearer ${token}`
                                 });
                             }
                         });
                     }

                 })

         }

     })
 }