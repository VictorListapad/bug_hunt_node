const { model, Schema } = require('mongoose');

const PostSchema = Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  tags: {
    type: [],
    ref: "Category",
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  price: {
    type: Number,
    require: true
  }
});

module.exports = model("Post", PostSchema);