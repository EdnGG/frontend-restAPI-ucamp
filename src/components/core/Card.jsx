import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Card = (props) => {
  const { selectedObjects, setSelectedObjects, handleCheckboxes } =
    useContext(UserContext);

  return (
    <div className="card">
      <img
        src={props.image}
        className="rounded-3"
        alt="Guitars"
        style={{ width: "100%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id={`checkbox-${props.id}`}
            onChange={(e) => handleCheckboxes(e, props)}
          />
          <label className="form-check-label" htmlFor={`checkbox-${props.id}`}>
            Add to Cart
          </label>
        </div>
      </div>
    </div>
  );
};

export default Card;
