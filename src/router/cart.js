const express = require("express");
const { requireSignin } = require("../common-middleware");
const { addItemToCart } = require("../controller/cart");

const router = express.Router();

router.post("/user/cart/addtocart", requireSignin, addItemToCart);

module.exports = router;
