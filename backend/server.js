require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();
const PORT = process.env.PORT || 3000;

const dbConfig = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PSQL_PORT,
};
const pool = new Pool(dbConfig);

app.use(cors());
app.use(express.json());

app.post("/api/posts", async (req, res) => {
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
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
