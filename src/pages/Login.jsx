import React, { useContext } from "react";
import InputForm from "../components/core/formInput";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const userCtx = useContext(UserContext);
  const { loginUser, formData } = userCtx;

  const sendData = (event) => {
    event.preventDefault();
    if (loginUser(formData)) {
      alert("Login successful");
    }
    return;
  };

  return (
    <div className="container pt-3 mt-3 w-20">
      <div className="pt-3 mt-3 w-20">
        <h1>Login</h1>
      </div>

      <form
        onSubmit={(e) => sendData(e)}
        className="py-3 my-3 px-3 mx-3 w-20 border border-2"
      >
        <div className="row mb-3">
          <InputForm tipo="email" />
        </div>

        <div className="row mb-3">
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
