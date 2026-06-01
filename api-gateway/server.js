const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(cors());

app.use(
  "/users",
  createProxyMiddleware({
    target: "http://localhost:4000",
    changeOrigin: true,
  })
);

app.use(
  "/products",
  createProxyMiddleware({
    target: "http://localhost:5001",
    changeOrigin: true,
  })
);

app.use(
  "/orders",
  createProxyMiddleware({
    target: "http://localhost:5002",
    changeOrigin: true,
  })
);

app.get("/", (req, res) => {
  res.send("API Gateway Running 🚀");
});

app.listen(8000, () => {
  console.log("API Gateway running on port 8000");
});