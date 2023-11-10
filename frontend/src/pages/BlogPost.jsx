import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4321/api/posts/${id}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the blog post: ", error);
        setBlog(null);
      });
  }, [id]);

  return (
    <div>
      {blog ? (
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
        </div>
      ) : (
        <p>No blog post found.</p>
      )}
    </div>
  );
};

export default BlogPost;
