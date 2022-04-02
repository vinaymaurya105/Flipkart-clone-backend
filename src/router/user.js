const express = require("express");
const router = express.Router();

router.post("/signin", (req, res) => {
  res.send("Login Successful");
});

router.get("/signup", (req, res) => {
  res.send("User registerd Successfull");
});

module.exports = user;
