const express = require('express');
const { getUsers, register, login, getCurrentUser } = require('../controller/user-controller');
const router = express.Router();

router.route('/')
    .get(getUsers);

router.route('/register')
    .post(register);

router.route('/login')
    .post(login);

router.route('/current')
    .get(getCurrentUser);

module.exports = router;