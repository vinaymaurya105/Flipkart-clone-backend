const express = require("express");

const { addCategory, getCategories } = require("../controller/category");

const router = express.Router();

router.post("/category/create", addCategory);

router.get("/category/get", getCategories);

module.exports = router;
