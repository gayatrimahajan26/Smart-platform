const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const Order = require("./models/Order");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// Home Route
app.get("/", (req, res) => {
  res.send("Order Service Running 🚀");
});

// Create Order
app.post("/orders", async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;

    if (!userId || !productId || !quantity) {
      return res.status(400).json({
        message: "userId, productId and quantity are required"
      });
    }

    const order = await Order.create({
      userId,
      productId,
      quantity
    });

    res.status(201).json(order);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Get All Orders
app.get("/orders", async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Start Server
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`🚀 Order Service running on port ${PORT}`);
});