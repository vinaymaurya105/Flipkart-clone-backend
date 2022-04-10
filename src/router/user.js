const express = require("express");

// validate new user field
const {
  validateSignupRequest,
  isRequestValid,
  validateSigninRequest,
} = require("../validators/validator");

const router = express.Router();

const { signup, signin, userSignin } = require("../controller/autho");

router.post("/signup", validateSignupRequest, isRequestValid, signup);

router.post("/signin", validateSigninRequest, isRequestValid, signin);

// router.post("/profile", userSignin, (req, res) => {
//   res.status(201).json({ user: "user" });
// });

module.exports = router;
