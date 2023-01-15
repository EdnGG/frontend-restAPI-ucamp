import React, { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";


const SignIn = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('user: ', user)
  }

  return (
    <div className="container pt-3 mt-3 w-20">
      <div className="pt-3 mt-3 w-20">
        <h1>Sign In</h1>
      </div>
      <form onSubmit={ handleSubmit } className="pt-3 mt-3 w-20">
      <div className="row mb-3">
    <label for="inputName" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputName" name="name" onChange={handleChange}/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail" name="email" onChange={handleChange}/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword" name="password" onChange={handleChange}/>
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputConfirm" className="col-sm-2 col-form-label">Confirm Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputConfirm" name="confirmPassword"/>
    </div>
  </div>
 
  <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
      </div>
  )
}

export default SignIn
