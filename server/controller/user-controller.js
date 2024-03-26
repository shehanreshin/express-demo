const asyncHandler = require('express-async-handler');
const {constants} = require('../util/constant');
const User = require('../model/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getUsers = asyncHandler(async (req, res) => {
    res.status(constants.OK).json(await User.find());
});

const register = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
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

    if (!user) {
        res.status(constants.VALIDATION_ERROR);
        throw new Error("User data is not valid");
    }

    res.status(constants.CREATED).json({_id: user.id, email: user.email});
});

const login = asyncHandler(async (req, res) => {
    const {email, password} = req.body;
    if (!email || !password) {
        res.status(constants.VALIDATION_ERROR);
        throw new Error("Ensure that all fields are filled");
    }

    const user = await User.findOne({email});

    if (!user || !(await bcrypt.compare(password, user.password))) {
        res.status(constants.VALIDATION_ERROR);
        throw new Error("Invalid email or password");
    }

    const accessToken = jwt.sign(
        {
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        },
        process.env.ACCESS_TOKEN_KEY,
        {expiresIn: "1m"}
    );

    res.status(constants.OK).json({accessToken});
});

const getCurrentUser = asyncHandler(async (req, res) => {
    res.status(constants.OK).json({message: "current user"});
});

module.exports = {getUsers, register, login, getCurrentUser};