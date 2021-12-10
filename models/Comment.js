const { model, Schema } = require('mongoose');

const CommentSchema = Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  likes: {
    type: Number
  },
  date: {
    type: Date
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "Post",
    required: true
  }
})

module.exports = model("Comment", CommentSchema);