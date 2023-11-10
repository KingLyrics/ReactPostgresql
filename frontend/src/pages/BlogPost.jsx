import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/posts/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the blog post: ", error);
        setBlog(null);
      });
  }, [id]);

  return (
    <div className="container mt-5">
      {blog ? (
        <div>
          <h1 className="fs-1">Title: {blog.title}</h1>
          <p className="fs-5">Authored by: {blog.author}</p>
          <p className="fs-3 text-break fw-light">{blog.content}</p>
        </div>
      ) : (
        <p>No blog post found.</p>
      )}
    </div>
  );
};

export default BlogPost;
