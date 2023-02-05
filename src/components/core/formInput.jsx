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
    <>
      <label htmlFor="{tipo}">{options[tipo].title}</label>
      <div>
        <input
          className="shadow-sm rounded-lg bg-white p-2"
          style={{
            borderRadius: "20px",
            border: "1px solid gray",
            width: "40%",
            maxWidth: "400px",
          }}
          id={tipo}
          name={tipo}
          type={options[tipo].type}
          placeholder={options[tipo].placeholder}
          required
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
};

export default formInput;
