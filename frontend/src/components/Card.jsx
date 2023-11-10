/* eslint-disable react/prop-types */
import "../styles/Hompage.css";

export default function Card({ data }) {
  return (
    <div className="col-6 mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-truncate">{data.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Authored By: {data.author}
          </h6>
          <p className="card-text set_width text-truncate">{data.content}</p>
          <a href="#" className="card-link">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
