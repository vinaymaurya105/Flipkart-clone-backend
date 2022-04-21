const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    // parentId: {
    //   type: String,
    // },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    offer: { type: String },
    productPictures: [
      {
        img: { type: String },
      },
    ],

    reviwes: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

        review: String,
      },
    ],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
