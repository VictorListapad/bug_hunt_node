const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("Connected to db 🔌"))
  .catch(() => console.log("Couldn't not connect to db ❌"));

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/post"));
app.use("/api/categories", require("./routes/category"));

const port = process.env.PORT
app.listen(port, () => {
  console.log("Server running...⚡");
});
