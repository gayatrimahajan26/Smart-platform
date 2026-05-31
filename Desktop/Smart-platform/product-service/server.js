const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Product Service Running");
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});