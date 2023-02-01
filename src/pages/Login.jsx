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
    // console.log("send data");
    loginUser(formData, navigate);
    // navigate("/profile");
  };

  return (
    <div className="container pt-3 mt-3 w-20">
      <div className="pt-3 mt-3 w-20">
        <h1>Login</h1>
      </div>

      <form
        onSubmit={sendData}
        className="py-3 my-3 px-3 mx-3 w-20 border border-2"
      >
        <div className="row mb-3 form-group">
          <InputForm tipo="email" />
        </div>

        <div className="row mb-3 form-group">
          <InputForm tipo="password" />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
