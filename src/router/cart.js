const express = require("express");
const { addItemToCart } = require("../controller/cart");

const router = express.Router();

router.post("/user/cart/addtocart");

module.exports = router;
