const express = require('express');
const router = express.Router();

router.route('/')
    .get(getUsers);

router.route('/register')
    .post(register);

router.route('/login')
    .post(login);

module.exports = router;