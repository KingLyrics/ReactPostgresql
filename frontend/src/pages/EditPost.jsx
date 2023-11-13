import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, FloatingLabel } from "react-bootstrap";
import axios from "axios";

// Use the VITE_ prefix for environment variables in Vite
const apiUrl = import.meta.env.VITE_API_URL;

function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [postData, setPostData] = useState({
    title: "",
    author: "",
    content: "",
  });

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/posts/${id}`)
      .then((response) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching blog posts: ", error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    setPostData({
      ...postData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${apiUrl}/api/posts/${id}`, postData);
      alert("Post has been edited");
      navigate(`/posts/${id}`);
    } catch (error) {
      console.error("Couldn't update the post:", error);
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="text-secondary pb-5">Edit Post</h1>
      <form className="d-flex flex-column mb-3" onSubmit={handleSubmit}>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            type="text"
            placeholder="Title Of The Blog"
            name="title"
            value={postData.title}
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
            value={postData.author}
            onChange={handleInputChange}
          />
          <label htmlFor="floatingPasswordCustom">Author Name</label>
        </Form.Floating>
        <FloatingLabel controlId="floatingTextarea2" label="Description">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            name="content"
            style={{ height: "100px" }}
            value={postData.content}
            onChange={handleInputChange}
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

export default EditPost;
