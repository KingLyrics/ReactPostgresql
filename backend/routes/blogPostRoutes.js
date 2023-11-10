const express = require("express");
const router = express.Router();
const blogPostController = require("../controllers/blogPostController");

router
  .post("/", blogPostController.createPost)
  .get("/", blogPostController.getAllPosts)
  .get("/:id", blogPostController.getPostById)
  .put("/:id", blogPostController.updatePost)
  .delete("/:id", blogPostController.deletePost);

module.exports = router;
