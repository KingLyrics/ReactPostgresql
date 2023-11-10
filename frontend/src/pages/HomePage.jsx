import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";

export default function HomePage() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4321/api/posts")
      .then((response) => {
        setBlogPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-secondary">All Posts</h1>
      <div>
        <div className="row mt-2">
          {blogPosts.map((blog) => (
            <Card key={blog.id} data={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
