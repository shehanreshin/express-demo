const asyncHandler = require('express-async-handler');
const { constants } = require('../util/constant');

const getUsers = asyncHandler(async (req, res) => {
    res.status(constants.OK).json({ message: "all users" });
});

const register = asyncHandler(async (req, res) => {
    res.status(constants.OK).json({ message: "registered user" });
});

const login = asyncHandler(async (req, res) => {
    res.status(constants.OK).json({ message: "user logged in" });
});

module.exports = { getUsers, register, login };