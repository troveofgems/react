const
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken'),
  User = require('../db/models/User'),
  config = require('config'),
  {
    sendAPIResponse
  } = require('../utils/serverResponse');

// @route   POST api/users
// @desc    Register A User
// @access  Public
const registerUser = async (req, res, next) => {
  const { firstName, middleInitial, lastName, email, password } = req.body;
  try {
    let userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      let data = { msg: 'User Already Exists', success: false, bac: 400 };
      return sendAPIResponse(res, 400, data);
    }

    const
      newUser = new User({ firstName, middleInitial, lastName, email, password }),
      salt = await bcrypt.genSalt(10);

    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();
    const payload = {
        user: {
          id: newUser.id
        }
    };

    jwt.sign(payload, config.get('JWT_STAMP'), {
      expiresIn: 3600 // Hour
    }, (err, token) => {
      return sendAPIResponse(res, 201, { token });
    });
  } catch (err) {
    return sendAPIResponse(res, 500, { ...err });
  }
};

module.exports = {
  registerUser
};