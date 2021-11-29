const
  express = require('express'),
  router = express.Router(),
  { validate } = require("express-validation"),
  { getLoginUserData, login } = require('../controllers/auth.controller'),
  { loginData } = require("../validation/user.validation").validationSchema,
  { jwtProtectedRoute } = require('../middleware/auth.middleware');

router
  .route('/')
  .get(jwtProtectedRoute, getLoginUserData)
  .post(validate(loginData), login);

module.exports = router;