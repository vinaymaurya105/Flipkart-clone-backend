const express = require("express");

const { signup, signin, userSignin } = require("../controller/autho");
const router = express.Router();

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/profile", userSignin, (req, res) => {
  res.status(201).json({ user: "user" });
  
});

module.exports = router;
