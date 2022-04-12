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
    parentId: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    discription: {
      type: String,
      trim: true,
    },
    offer: { type: String },
    productPicture: {
      img: { type: String },
    },
    reviwes: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

        review: String,
      },
    ],
  },

  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);

// const productSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     slug: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     price: {
//       type: Number,
//       required: true,
//     },
//     discription: {
//       type: String,
//       trim: true,
//     },
//     offer: { type: String },
//     productPicture: {
//       img: { type: String },
//     },
//     revies: [
//       {
//         userId: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         review: String,
//       },
//     ],
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Products", productSchema);
