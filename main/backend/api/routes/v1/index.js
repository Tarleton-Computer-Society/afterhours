 const express = require('express');

 const controller = require('../../controllers/main.controller');
 const {
     validator
 } = require('../../../swagger/swagger');

 const router = express.Router();

 router.get('/health', controller.health);

 router.get('/public', controller.public);

 router.post('/objects', validator.validate("post", "/objects"), controller.post);

 module.exports = router;