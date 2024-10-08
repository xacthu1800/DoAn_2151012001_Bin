const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT } = require('../config/config');
const checkPassword = (password, passwordHash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, passwordHash, (err, same) => {
            if (err) {
                reject(err);
            }
            resolve(same);
        });
    });
};

const newToken = (user) => {
    return jwt.sign({ id: user._id }, JWT.jwt, {
        expiresIn: JWT.jwtExp,
    });
};

const verifyToken = (token) =>
    new Promise((resolve, reject) => {
        jwt.verify(token, JWT.jwt, (err, payload) => {
            if (err) return reject(err);
            resolve(payload);
        });
    });

const newToken_Admin = (user) => {
    return jwt.sign({ id: user._id }, JWT.jwt_Admin, {
        expiresIn: JWT.jwtExp,
    });
};

const verifyToken_Admin = (token) =>
    new Promise((resolve, reject) => {
        jwt.verify(token, JWT.jwt_Admin, (err, payload) => {
            if (err) return reject(err);
            resolve(payload);
        });
    });

const newToken_Agent = (user) => {
    return jwt.sign({ id: user._id }, JWT.jwt_Agent, {
        expiresIn: JWT.jwtExp,
    });
};

const verifyToken_Agent = (token) =>
    new Promise((resolve, reject) => {
        jwt.verify(token, JWT.jwt_Agent, (err, payload) => {
            if (err) return reject(err);
            resolve(payload);
        });
    });

module.exports = {
    checkPassword,
    newToken,
    verifyToken,
    newToken_Admin,
    verifyToken_Admin,
    newToken_Agent,
    verifyToken_Agent,
};
