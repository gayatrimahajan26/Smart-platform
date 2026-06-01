const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// Home Route
app.get("/", (req, res) => {
  res.send("User Service Running 🚀");
});

// Create User
app.post("/users", async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and Email are required"
      });
    }

    const user = await User.create({
      name,
      email
    });

    res.status(201).json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Get All Users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Start Server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 User Service running on port ${PORT}`);
});