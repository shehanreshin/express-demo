const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const {constants} = require("./../util/constant");

const validateTokenHandler = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        res.status(constants.UNAUTHORIZED);
        throw new Error("User is not authorized or token is missing");
    }

    token = authHeader.split(" ")[1];
    if (!token) {
        res.status(constants.UNAUTHORIZED);
        throw new Error("User is not authorized or token is missing")
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (err, decoded) => {
        if (err) {
            res.status(constants.UNAUTHORIZED);
            throw new Error("User is not authorized");
        }

        req.user = decoded.user;
        next();
    });
});

module.exports = validateTokenHandler;