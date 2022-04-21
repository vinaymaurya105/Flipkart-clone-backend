const express = require("express");
const app = express();
const env = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

//environment variable
env.config();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

// routes

const userRoutes = require("./router/user");
const categoryRoutes = require("./router/category");
const cartRoutes = require("./router/cart");
const productRoutes = require("./router/product");

// CONNECTION WITH DATABASE

mongoose
  .connect("mongodb://localhost:27017/Ecommerce")
  .then((res) => {
    console.log("Mongoose connection successful");
  })
  .catch("Mongoose Connection failed");

app.use("/public", express.static(path.join(__dirname, "uploads")));
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", cartRoutes);
app.use("/api", productRoutes);
app.get("/hello", (req, res) => {
  res.send("hello");
});

app.listen(process.env.PORT, () => {
  console.log(`SERVER STARTED AT PORT ${process.env.PORT}`);
});
