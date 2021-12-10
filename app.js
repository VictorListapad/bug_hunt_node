const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to db 🔌"))
  .catch(() => console.log("Couldn't not connect to db ❌"));

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", require("./routes/auth.js"));
app.use("/api/posts", require("./routes/post.js"));
app.use("/api/categories", require("./routes/category.js"));
app.use("/api/comments", require("./routes/comment.js"))

const port = process.env.PORT
app.listen(port, () => {
  console.log("Server running...⚡");
});
