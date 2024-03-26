const asyncHandler = require('express-async-handler');
const { constants } = require('../util/constant');
const User = require('../model/user-model');
const bcrypt = require('bcrypt');

const getUsers = asyncHandler(async (req, res) => {
    res.status(constants.OK).json(await User.find());
});

const register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        res.status(constants.VALIDATION_ERROR);
        throw new Error("Ensure that all the fields are filled");
    }

    if (await User.findOne({email})) {
        res.status(constants.VALIDATION_ERROR);
        throw new Error("User is already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username, email, password: hashedPassword
    });

    res.status(constants.CREATED).json({_id: user.id, email: user.email});
});

const login = asyncHandler(async (req, res) => {
    res.status(constants.OK).json({ message: "user logged in" });
});

const getCurrentUser = asyncHandler(async (req, res) => {
    res.status(constants.OK).json({message: "current user"});
});

module.exports = { getUsers, register, login, getCurrentUser };