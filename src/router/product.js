const express = require("express");
const {
  createProduct,
  getProductDetailsById,
  getProductDetailsBycategory,
} = require("../controller/product");
const Product = require("../models/products");
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/product/create", upload.array("productPicture"), createProduct);

router.get("/products", async (req, res) => {
  const product = await Product.find({});

  res.send(product);
});

router.get("/:productId", getProductDetailsById);
router.get("/category/:categoryId", (req, res) => {
  const { categoryId } = req.params;

  if (categoryId) {
    Product.find({ category: categoryId }).exec((error, product) => {
      if (error) return res.status(400).json({ error });
      if (product) {
        res.status(200).send(product);
      }
    });
  } else {
    return res.status(400).json({ error: "Params required" });
  }
});

module.exports = router;
