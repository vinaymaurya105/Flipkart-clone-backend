const express = require("express");
const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Response You are Seing is written in get ");
});

app.listen(PORT, () => {
  console.log(`SERVER STARTED AT PORT ${PORT}`);
});
