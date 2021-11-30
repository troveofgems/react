const
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken'),
  User = require('../db/models/User'),
  {
    sendAPIResponse
  } = require('../utils/serverResponse');
const {useJWT} = require("../utils/jwt.utility");

// @route   GET api/auth
// @desc    Get Logged-In User Data
// @access  Private
const getLoginUserData = async (req, res, next) => {
  try {
    const userData = await User.findById(req.user.id).select('-password');
    return res.status(200).json(userData);
  } catch (err) {
    console.error(err);
  }
};

// @route   POST api/auth
// @desc    Log User Into Application
// @access  Public
const login = async (req, res, next) => {
  const { email, password, tokenRequestType } = req.body;

  try {
    let userAccount = await User.findOne({ email });
    if (!userAccount) {
      let data = { msg: 'Invalid Credentials', success: false }
      return sendAPIResponse(res, 400, data);
    }

    const passwordCheckSuccessful = await bcrypt.compare(password, userAccount.password);
    if(!passwordCheckSuccessful) {
      let data = { msg: 'Invalid Credentials', success: false }
      return sendAPIResponse(res, 400, data);
    }

    return useJWT(res, userAccount, tokenRequestType);
  } catch (err) {
    console.log('Err On Login', err);
  }
};

module.exports = {
  login,
  getLoginUserData
};