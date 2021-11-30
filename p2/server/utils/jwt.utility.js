const
  jwt = require("jsonwebtoken"),
  {
    sendAPIResponse
  } = require("./serverResponse");

module.exports.useJWT = (res, userData, tokenRequestType) => {
  const payload = {
    user: {
      id: userData.id
    }
  };

  let limitInMinutes = tokenRequestType === 'public' ? 5 : 480; // Either 5 Minutes or 8 hours

  jwt.sign(payload, process.env.JWT_STAMP, {
    expiresIn: (60 * limitInMinutes)
  }, (err, token) => sendAPIResponse(res, 200, { token }));
};
