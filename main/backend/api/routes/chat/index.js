const passport = require('passport');


 
const express = require('express');
const controller = require('../../controllers/chat.controller');
const { validator } = require('../../../swagger/swagger');
const router = express.Router();
router.post('/all', controller.allchats);
router.post('/sendmessage', controller.sendmessage);
module.exports = router;
