const jwt = require("jsonwebtoken");
const {
  secret,
  expiresIn,
  algorithm,
} = require("../../../infrastructure/configs/jwtConfig");

function createToken(data) {
  return jwt.sign(data, secret, { expiresIn, algorithm });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, secret, { algorithms: [algorithm] });
  } catch (error) {
    return null;
  }
}

module.exports = {
  createToken,
  verifyToken,
};
