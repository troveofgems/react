const
  jwt = require("jsonwebtoken"),
  config = require("config"),
  {
    sendAPIResponse
  } = require("./serverResponse");

module.exports.useJWT = (res, userData) => {
  const payload = {
    user: {
      id: userData.id
    }
  };

  jwt.sign(payload, config.get('JWT_STAMP'), {
    expiresIn: 3600 // Hour
  }, (err, token) => {
    return sendAPIResponse(res, 200, { token });
  });
};
