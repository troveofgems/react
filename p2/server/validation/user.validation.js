const { Joi } = require('express-validation');

const registrationData = {
  body: Joi.object({
    firstName: Joi.string()
      .required(),
    middleInitial: Joi.string(),
    lastName: Joi.string()
      .required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .regex(/[a-zA-Z0-9]{16,32}/)
      .required()
  })
};

const loginData = {
  body: Joi.object({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .required()
  })
};

module.exports.validationSchema = {
  loginData,
  registrationData
};