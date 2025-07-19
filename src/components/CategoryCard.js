import React from "react";
import { Link } from "react-router-dom";

export default function CategoryCard(props) {
  return (
    <div>
      <Link to={`/Category/${encodeURIComponent(props.name)}`}>
        <div
          className="card mx-4 my-4 shadow-sm hover-shadow"
          style={{ width: "18rem", cursor: "pointer" }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/${props.image}`}
            className="card-img-top"
            alt={props.name}
          />
        </div>
      </Link>
    </div>
  );
}
