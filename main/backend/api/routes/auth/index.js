const passport = require('passport');
const express = require('express');

const controller = require('../../controllers/auth.controller');
const {
    validator
} = require('../../../swagger/swagger');

const router = express.Router();

router.post('/register', controller.register);
router.post('/login', controller.login);

// router.get('/public', controller.public);

// router.post('/objects', validator.validate("post", "/objects"), controller.post);

module.exports = router;