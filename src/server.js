const express = require("express");
const app = express();
const env = require("dotenv");
const mongoose = require("mongoose");

//environment variable
env.config();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes

const userRoutes = require("./router/user");
const categoryRoutes = require("./router/category");

// CONNECTION WITH DATABASE

mongoose
  .connect("mongodb://localhost:27017/Ecommerce")
  .then((res) => {
    console.log("Mongoose connection successful");
  })
  .catch("Mongoose Connection failed");

app.use("/api", userRoutes);
app.use("/api", categoryRoutes);

app.listen(process.env.PORT, () => {
  console.log(`SERVER STARTED AT PORT ${process.env.PORT}`);
});
