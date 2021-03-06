const Product = require("../models/products");
const slugify = require("slugify");
const { startSession } = require("../models/products");

exports.createProduct = (req, res) => {
  // res.status(201).json({ file: req.files, body: req.body });
  const { name, price, description, category, quantity, offerPrice, rating } =
    req.body;
  let productPictures = [];

  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  const product = new Product({
    name: name,
    slug: slugify(name),
    price,
    quantity,
    description,
    productPictures,
    category,
    offerPrice,
    rating,
  });

  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product });
    }
  });
};

exports.getProductDetailsById = (req, res) => {
  const { productId } = req.params;

  if (productId) {
    Product.findOne({ _id: productId }).exec((error, product) => {
      if (error) return res.status(400).json({ error });
      if (product) {
        res.status(200).send(product);
      }
    });
  } else {
    return res.status(400).json({ error: "Params required" });
  }
};
