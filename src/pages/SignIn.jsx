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
    <div
      className="container my-5 justify-content-center align-items-center"
      style={{
        height: "80vh",
        width: "30%",
      }}
    >
      <div className="py-3 my-3">
        <h1 className="fw-bold">Sign in</h1>
      </div>

      <form
        onSubmit={sendData}
        className="py-3 my-3 px-3 mx-3 w-20 shadow-lg rounded-lg"
        style={{
          backgroundColor: "#DCDCDC",
          height: "60vh",
          borderRadius: "20px",
        }}
      >
        <div className="row mt-4 pt-4 form-group">
          <InputForm tipo="name" />
        </div>

        <div className="row mt-4 pt-4 form-group">
          <InputForm tipo="email" />
        </div>

        <div className="row mt-4 pt-4 form-group">
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
