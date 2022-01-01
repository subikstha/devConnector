const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API running");
});

app.get("/product", (req, res) => {
  res.send("This is the product page");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`);
});
