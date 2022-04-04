const express = require("express");
const app = express();
const env = require("dotenv");
const mongoose = require("mongoose");

//environment variable
env.config();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CONNECTION WITH DATABASE

mongoose
  .connect("mongodb://localhost:27017/Ecommerce")
  .then((res) => {
    console.log("Mongoose connection successful");
  })
  .catch("Mongoose Connection failed");

//IMPORT COMPONENTS FILES

// routes

const userRoutes = require("./router/user");

app.use("/api", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`SERVER STARTED AT PORT ${process.env.PORT}`);
});
