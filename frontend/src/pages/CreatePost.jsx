import { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

export default function CreatePost() {
  const [newBlogPost, setnewBlogPost] = useState({
    title: "",
    content: "",
    author: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setnewBlogPost({
      ...newBlogPost,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${apiUrl}/api/posts/`, newBlogPost) // Pass newBlogPost in the request
      .then((response) => {
        console.log("New Post Created: ", response.data);
        setnewBlogPost({
          title: "",
          content: "",
          author: "",
        });
        alert("Post created successfully!");
      })
      .catch((error) => {
        console.log("Couldn't create new post:", error);
      });
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="text-secondary pb-5">Create Post</h1>
      <form onSubmit={handleSubmit} className="d-flex flex-column mb-3 ">
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            placeholder="Title Of The Blog"
            name="title"
            value={newBlogPost.title}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="floatingInputCustom">Title Of The Blog</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingPasswordCustom"
            type="text"
            placeholder="Author Name"
            name="author"
            value={newBlogPost.author}
            onChange={handleInputChange}
          />
          <label htmlFor="floatingPasswordCustom">Author Name</label>
        </Form.Floating>
        <FloatingLabel controlId="floatingTextarea2" label="Description">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            name="content"
            value={newBlogPost.content}
            onChange={handleInputChange}
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <button
          type="submit"
          className="btn btn-primary mt-5"
          style={{ maxWidth: "250px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
