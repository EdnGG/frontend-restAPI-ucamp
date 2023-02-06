import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const formInput = ({ tipo }) => {
  const userCtx = useContext(UserContext);

  const { handleChange } = userCtx;

  const options = {
    name: { title: "Username", type: "text", placeholder: "Name" },
    email: { title: "Email", type: "email", placeholder: "Email" },
    password: { title: "Password", type: "password", placeholder: "Password" },
  };
  return (
    <div className="form-group d-flex flex-column justify-content-center align-items-center">
      <label htmlFor={tipo}>{options[tipo].title}</label>
      <div className="form-group d-flex flex-column justify-content-center align-items-center">
        <input
          className="form-control shadow-sm rounded-lg bg-white p-2 my-2"
          style={{
            borderRadius: "20px",
            border: "1px solid gray",
            width: "100%",
            maxWidth: "100%",
          }}
          id={tipo}
          name={tipo}
          type={options[tipo].type}
          placeholder={options[tipo].placeholder}
          required
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default formInput;
