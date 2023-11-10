/* eslint-disable react/prop-types */
import "../styles/Hompage.css";
import { Link } from "react-router-dom";

export default function Card({ data }) {
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
          <div className="d-flex justify-content-between">
            <Link to={`/posts/${data.id}`} className="card-link">
              Read More
            </Link>
            <Link to={`/post/edit/${data.id}`}>Edit Post</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
