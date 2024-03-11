const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const teamMembersRouter = require('./routes/teamMembers');
const connectsRouter = require('./routes/connect');

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = express();

// Middleware
app.use(express.json()); // Parse JSON request bodies
app.use(cors()); // Enable CORS
app.use(helmet()); // Set security headers
app.use(morgan("combined")); // Request logging

// Connect to MongoDB
const PORT = process.env.PORT || 3000;
const URL = process.env.MONGODB_URI;

mongoose
  .connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});


app.use('/api', teamMembersRouter);
app.use('/api', connectsRouter);


// 404 Not Found middleware
app.use((req, res) => {
  console.log(`404: Not Found - ${req.method} ${req.url}`);
  res.status(404).json({ error: "Not Found" });
});
