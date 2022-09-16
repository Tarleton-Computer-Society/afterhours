/**
 * Created by Vadym Yatsyuk on 06.08.18
 */
const express = require('express');

const controller = require('../../controllers/auth.controller');
const {
    validator
} = require('../../../swagger/swagger');

const router = express.Router();

router.get('/register', controller.register);

// router.get('/public', controller.public);

// router.post('/objects', validator.validate("post", "/objects"), controller.post);

module.exports = router;