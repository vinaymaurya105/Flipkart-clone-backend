const { check, validationResult } = require("express-validator");

// validate Signup request

exports.validateSignupRequest = [
  check("firstName").notEmpty().withMessage("FirstName is required"),

  check("lastName").notEmpty().withMessage("LastName is required"),

  check("userName").notEmpty().withMessage("UserName is required"),

  check("email").isEmail().withMessage("Valid mail required"),

  check("password")
    .isLength({ min: 5 })
    .withMessage("Password must be atleast 5 character long"),
];

// validate signin request

exports.validateSigninRequest = [
  check("email").isEmail().withMessage("Valid mail required"),

  check("password")
    .isLength({ min: 5 })
    .withMessage("Password must be atleast 5 character long"),
];

exports.isRequestValid = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.array().length > 0) {
    return res.status(404).json({
      error: errors.array()[0].msg,
    });
  }
  next();
};
