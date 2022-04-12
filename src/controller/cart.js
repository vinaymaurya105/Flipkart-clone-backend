const cart = require("../models/cart");
const Cart = require("../models/cart");

exports.addItemToCart = (req, res) => {
  const car = new Cart({
    user: req.user._id,
    cartItems: req.body.cartItems,
  });

  cart.save((error, cart) => {
    if (cart) {
      return res.status(201).json({ cart });
    } else {
      return res.status(201).json({ error });
    }
  });
};
