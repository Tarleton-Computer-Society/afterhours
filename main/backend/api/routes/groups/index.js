const passport = require('passport');


 
const express = require('express');
const controller = require('../../controllers/groups.controller');
const { validator } = require('../../../swagger/swagger');
const router = express.Router();
router.get('/all', controller.allgroups);
router.post('/join', controller.joingroup);
module.exports = router;
