const { create } = require("../models/Comment");
const Comment = require("../models/Comment")

const getAllCommentsFromPost = async (req, res) => {
  const { id } = req.params; // this is the post id
  const comments = await Comment.find({post: id}) // return all comments from that post
    .populate("post", "title")
  try {
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({message: "Couldn't get comments"});
  }
} 

const createComment = async (req, res) => {
  const comment = await Comment.create(req.body);
  try {
    return res.status(201).json(comment);
  } catch (error) {
    return res.status({message: "Couldn't create comment"});
  }
}

const updateComment = async (req, res) => {
  const { id } = req.params;
  const commentToUpdate = await Comment.findByIdAndUpdate(id, req.body, {new: true})
  try {
    return res.status(202).json(commentToUpdate);
  } catch (error) {
    return res.status(500).json({message: "Couldn't update the comment"});
  }
}

const deleteComment = async (req, res) => {
  const { id } = req.params;
  await Comment.findByIdAndDelete(id);
  try {
    return res.status(203).json({message: "Comment successfully deleted"})
  } catch (error) {
    return res.status(500).json({message: "Couldn't delete the comment"})
  }
}

module.exports = {
  getAllCommentsFromPost,
  createComment,
  updateComment,
  deleteComment
}
