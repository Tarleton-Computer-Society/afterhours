 const bcrypt = require('bcryptjs');
 const jwt = require('jsonwebtoken');
 const passport = require('passport');

 const httpStatus = require('http-status');
 const User = require('../models/user')
 const Groups = require('../models/groups')
 const {createSlug} = require('../../utils/functions'); 
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
                 groups:[
                    createSlug(major)

                 ],
                 password: bcrypt.hashSync(password, 10)

             })
             
             Groups.findOne({name: major,slug:createSlug(major)}).then(group=>{
                    if(group){
                        group.members.push(newUser._id)
                        group.save()
                    }
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
                             id: user.id,
                             firstname: user.firstname,
                             lastname: user.lastname,
                             email: user.email,
                             name: user.firstname+ ' '+ user.lastname,

                         }

                         jwt.sign(payload, 'secret', {
                             expiresIn: 3600
                         }, (err, token) => {
                             if (err) console.error('There is some error in token', err);
                             else {
                                 res.json({
                                    user:payload,
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