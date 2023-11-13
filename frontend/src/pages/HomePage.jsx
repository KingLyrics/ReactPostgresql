import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export default function HomePage() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/posts/`)
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  const handleDelete = (blogId) => {
    const updatedPosts = blogPosts.filter((post) => post.id !== blogId);
    setBlogPosts(updatedPosts);
  };

  return (
    <div className="container mt-4 pb-5">
      <h1 className="text-secondary">All Posts</h1>
      <div>
        <div className="row mt-2">
          {blogPosts.map((blog) => (
            <Card key={blog.id} data={blog} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}
