import React, { useContext } from "react";
import InputForm from "../components/core/formInput";
import { UserContext } from "../context/UserContext";

const SignIn = () => {
  const userCtx = useContext(UserContext);
  const { registerUser, formData } = userCtx;

  const sendData = (event) => {
    event.preventDefault();
    if (registerUser(formData)) {
      alert("Sign In successful");
    }
    return;
  };

  return (
    <div className="container pt-3 mt-3 w-20">
      <div className="pt-3 mt-3 w-20">
        <h1>Sign In</h1>
      </div>

      <form
        onSubmit={(e) => sendData(e)}
        className="py-3 my-3 px-3 mx-3 w-20 border border-2"
      >
        <div className="row mb-3">
          <InputForm tipo="name" />
        </div>
        <div className="row mb-3">
          <InputForm tipo="email" />
        </div>
        <div className="row mb-3">
          <InputForm tipo="password" />
        </div>

        {/* --OPCIONAL-- }
  <div className="row mb-3">
    <label for="inputConfirm" className="col-sm-2 col-form-label">Confirm Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputConfirm" name="confirmPassword"/>
    </div>
  </div> 
  */}

        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
