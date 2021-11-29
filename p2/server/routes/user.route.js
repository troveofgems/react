const
  express = require('express'),
  router = express.Router(),
  {
    registerUser
  } = require('../controllers/user.controller'),
  { validate } = require('express-validation'),
  { registrationData } = require('../validation/user.validation').validationSchema;

router
  .route('/')
  .post(validate(registrationData), registerUser);

module.exports = router;