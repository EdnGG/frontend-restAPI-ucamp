import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import InputForm from "../components/core/formInput";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const { loginUser, formData } = userCtx;

  const sendData = (event) => {
    event.preventDefault();
    loginUser(formData, navigate);
  };

  return (
    <div
      className="container my-5 justify-content-center align-items-center"
      style={{
        height: "60vh",
        width: "30%",
      }}
    >
      <div className="py-3 my-3">
        <h1 className="fw-bold">Login</h1>
      </div>

      <form
        onSubmit={sendData}
        className="py-3 my-3 px-3 mx-3 w-20 shadow-lg rounded-lg"
        style={{
          backgroundColor: "#DCDCDC",
          height: "45vh",
          borderRadius: "20px",
        }}
      >
        <div className="row mt-4 pt-4 form-group">
          <InputForm tipo="email" />
        </div>

        <div className="row mt-4 pt-4 form-group">
          <InputForm tipo="password" />
        </div>

        <button type="submit" className="btn btn-primary my-5">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
