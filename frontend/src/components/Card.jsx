/* eslint-disable react/prop-types */
import "../styles/Hompage.css";
import { Link } from "react-router-dom";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export default function Card({ data, onDelete }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`${apiUrl}/api/posts/${data.id}`);
      onDelete(data.id);
      alert("Post has been deleted!");
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="col-6 mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-truncate">{data.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Authored By: {data.author}
          </h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Date: {new Date(data.date).toLocaleString()}
          </h6>
          <p className="card-text set_width text-truncate">{data.content}</p>
          <div className="d-flex align-items-center justify-content-between">
            <Link to={`/posts/${data.id}`} className="card-link">
              Read More
            </Link>
            <Link to={`/posts/edit/${data.id}`}>Edit Post</Link>
            <button onClick={handleDelete} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
