const Post = require("../models/Post");

const getAllPosts = async (req, res) => {
  const posts = await Post.find()
    .populate("author", "name")
    .populate("tags", "name")
  try {
    if (posts.length === 0) {
      return res.status(400).json({message: "No posts found"})
    }
    return res.status(200).json(posts); // TODO
  } catch (error) {
    return res.status(500).json({message: "Couldn't create the post"})
  }
}

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id)
    .populate("author", "name")
    .populate("tags", "name");
  try {
    return res.status(200).json(post);
  } catch (error) {
    return res.status(500).json({message: "Couldn't get the post"});
  }
}

const createPost = async (req, res) => {
  const postToCreate = await Post.create(req.body);
  try {
    return res.status(201).json(postToCreate);
  } catch (error) {
    return res.status(500).json({message: "Couldn't create the post"});
  }
}

const updatePost = async (req, res) => {
  const { id } = req.params;
  const postToUpdate = await Post.findByIdAndUpdate(id, req.body, {new: true});
  try {
    return res.status(202).json(postToUpdate);
  } catch (error) {
    return res.status(500).json({message: "Couldn't update the post"});
  }
}

const deletePost = async (req,res) => {
  const { id } = req.params;
  await Post.findByIdAndDelete(id);
  try {
    return res.status(203).json({message: "Succesfully Deleted the post"});
  } catch (error) {
    return res.status(500).json({message: "Couldn't delete/remove the post"});
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
}