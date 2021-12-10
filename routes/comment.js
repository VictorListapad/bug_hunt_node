const express = require("express");
const router = express.Router();

const {
  getAllCommentsFromPost,
  createComment,
  updateComment,
  deleteComment,
} = require("../controllers/commentController");

// GET/api/comments/post/:id
router.get("/post/:id", getAllCommentsFromPost);
router.post("/comment", createComment);
router.put("/comment/:id", updateComment);
router.delete("/comment/:id", deleteComment);

module.exports = router;
