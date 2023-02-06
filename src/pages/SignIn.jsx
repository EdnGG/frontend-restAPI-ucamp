import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

import InputForm from "../components/core/formInput";

const SignIn = () => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const { registerUser, formData } = userCtx;

  const sendData = (event) => {
    event.preventDefault();
    registerUser(formData, navigate);
  };

  return (
    <div className="container  my-5 d-flex flex-column justify-content-center align-items-center">
      <h1 className="fw-bold py-3 my-3">Sign in</h1>

      <form
        onSubmit={sendData}
        className="py-3 my-3 px-3 mx-3 shadow-lg justify-content-center align-items-center rounded-lg w-100 w-md-50"
        style={{
          backgroundColor: "#88c9f7",
          height: "80vh",
          borderRadius: "20px",
        }}
      >
        <div className="row mt-2 pt-2 form-group">
          <InputForm tipo="name" />
        </div>

        <div className="row mt-2 pt-2 form-group">
          <InputForm tipo="email" />
        </div>

        <div className="row mt-2 pt-2 form-group">
          <InputForm tipo="password" />
        </div>

        <button type="submit" className="btn btn-primary my-5">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
