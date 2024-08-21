const JWT = require("jsonwebtoken");

const secret = "$Super@123";

function createTokenForUser(user) {
  const payload = {
    _id: user._id,
    email: user._email,
    profileImageURL: user._profileImageURL,
    role: user._role,
  };
  const token = JWT.sign(payload, secret);
  return token;
}

function validateToken(token) {
  const payload = JWT.verify(token, secret);
  return payload;
}

module.exports = { createTokenForUser, validateToken };
