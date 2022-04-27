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
const newUser = require("../models/newUser");

router.post("/signup", validateSignupRequest, isRequestValid, signup);

router.post("/signin", validateSigninRequest, isRequestValid, signin);

router.get("/signin/:userId", (req, res) => {
  const { userId } = req.params;
  if (userId) {
    newUser.findOne({ _id: userId }).exec((error, user) => {
      if (user) {
        res.status(200).send(user);
      } else {
        return res.status(400).json({ error });
      }
    });
  } else {
    return res.status(400).json({ error: "Params required" });
  }
});

module.exports = router;
