const slugify = require("slugify");
const category = require("../models/category");
const Category = require("../models/category");

exports.addCategory = (req, res) => {
  const categoryObj = {
    name: req.body.name,
    slug: slugify(req.body.name),
  };

  if (req.body.parentId) {
    categoryObj.parentId = req.body.parentId;
  }

  const cat = new Category(categoryObj);

  cat.save((error, category) => {
    if (category) {
      return res.status(201).json({ category });
    } else {
      return res.status(404).json({ error });
    }
  });
};

exports.getCategory = (req, res) => {
  Category.find({}).exec((error, categories) => {
    if (categories) {
      return res.status(201).json({ categories });
    } else {
      return res.status(404).json({ error });
    }
  });
};
