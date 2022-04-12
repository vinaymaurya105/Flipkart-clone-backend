const express = require("express");

const router = express.Router();

const Products = require("../models/products");

router.post("/product/create", (req, res) => {
  res.status(202).json({ message: "Hello" });
});

module.exports = router;
