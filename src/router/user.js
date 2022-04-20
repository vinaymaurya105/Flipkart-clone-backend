const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);
// validate new user field
const {
  validateSignupRequest,
  isRequestValid,
  validateSigninRequest,
} = require("../validators/validator");

const router = express.Router();

const { signup, signin } = require("../controller/autho");

router.post("/signup", validateSignupRequest, isRequestValid, signup);

router.post("/signin", validateSigninRequest, isRequestValid, signin);

module.exports = router;
