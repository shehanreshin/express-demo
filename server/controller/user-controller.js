const asyncHandler = require('express-async-handler');
const { constants } = require('../util/constant');
const User = require('../model/user-model');

const getUsers = asyncHandler(async (req, res) => {
    res.status(constants.OK).json(await User.find());
});

const register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(constants.VALIDATION_ERROR);
        throw new Error("Ensure that all the fields are filled");
    }

    res.status(constants.CREATED).json(await User.create({
        username, email, password
    }));
});

const login = asyncHandler(async (req, res) => {
    res.status(constants.OK).json({ message: "user logged in" });
});

module.exports = { getUsers, register, login };