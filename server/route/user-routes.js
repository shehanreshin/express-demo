const express = require('express');
const { getUsers, register, login, getCurrentUser } = require('../controller/user-controller');
const validateToken = require("../middleware/validate-token-handler");
const router = express.Router();

router.route('/')
    .get(getUsers);

router.route('/register')
    .post(register);

router.route('/login')
    .post(login);

router.route('/current')
    .get(validateToken, getCurrentUser);

module.exports = router;