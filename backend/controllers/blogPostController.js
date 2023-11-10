require("dotenv").config();
const { Pool } = require("pg");
const dbConfig = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PSQL_PORT,
};

const pool = new Pool(dbConfig);

const createPost = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO blog_posts (title,content,author) VALUES($1,$2,$3) RETURNING *",
      [title, content, author]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating post: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM blog_posts");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching posts: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getPostById = async (req, res) => {
  const postId = req.params.id;
  try {
    const result = await pool.query("SELECT * FROM blog_posts WHERE id = $1", [
      postId,
    ]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    console.error("Error could not find the post:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updatePost = async (req, res) => {
  const PostId = req.params.id;
  const { title, content, author } = req.body;
  try {
    const result = await pool.query(
      "UPDATE blog_posts SET title = $1, content = $2, author = $3 WHERE id = $4 RETURNING *",
      [title, content, author, PostId]
    );
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    console.error("Error updating posts:", error);
  }
};

const deletePost = async (req, res) => {
  const postId = req.params.id;
  try {
    const result = await pool.query(
      "DELETE FROM blog_posts WHERE id = $1 RETURNING *",
      [postId]
    );
    if (result.rows.length > 0) {
      res.json({ message: "Post deleted successfully" });
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  } catch (error) {
    console.error("Error deleting post: ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
};
