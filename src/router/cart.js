const express = require("express");
const { requireSignin } = require("../common-middleware");
const { addItemToCart } = require("../controller/cart");

const router = express.Router();

router.post("/addtocart", addItemToCart);
// router.post("/addtocart", requireSignin, addItemToCart);

module.exports = router;
