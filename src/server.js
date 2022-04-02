const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Ecommerce")
  .then((res) => {
    console.log("Mongoose connection successful");
  })
  .catch("Mongoose Connection failed");

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Response You are Seing is written in get ");
});
app.post("/", (req, res) => {
  res.send("Post response ");
});

app.listen(PORT, () => {
  console.log(`SERVER STARTED AT PORT ${PORT}`);
});
