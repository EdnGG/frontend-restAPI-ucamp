import React, {useEffect, useState} from 'react'

const SignIn = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const user = {
    name,
    email,
    password,
    confirmPassword
  }

  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log(user )
  }
  return (
    <div className="container w-40">
      <div>
        <h1>Sign In</h1>
      </div>
      <form>
      <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="inputName3" />
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" />
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" />
    </div>
  </div>
  <div className="row mb-3">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Confirm Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputConfirm3" />
    </div>
  </div>
 
  <button type="submit" onClick={ ()=> handleSubmit } className="btn btn-primary">Sign in</button>
      </form>
      </div>
  )
}

export default SignIn