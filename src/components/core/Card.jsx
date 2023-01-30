import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div
      className="card p-5 m-5 justify-content-center align-items-center"
      style={{ width: "25%" }}
    >
      <img
        src={props.image}
        className="rounded-3"
        alt="Guitars"
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <Link to="/paypal" className="btn btn-primary">
          Check out
        </Link>
      </div>
    </div>
  );
};

export default Card;
