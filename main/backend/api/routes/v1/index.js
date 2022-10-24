 const express = require('express');
 const passport = require('passport');

 const controller = require('../../controllers/user.controller');
 const {
     validator
 } = require('../../../swagger/swagger');
 require('../../passport')(passport)
 const router = express.Router();
 router.get('/me', passport.authenticate('jwt', { session: false }), controller.me)
 module.exports = router;