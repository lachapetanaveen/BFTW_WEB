import React, { Component, useState } from "react";
import { toast } from 'react-toastify';
// import './assets/img1.jpg'
import { loginAuth } from '../../services/authService'
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    if (!email) {
      toast.error('Enter Email');
    } else if (!password) {
      toast.error('Enter Password');
    } else {
    try {
    
      const logindata = await loginAuth({ email, password_hash:password })
      if (logindata) {
        // alert("login successful");
        await localStorage.setItem('logindata',JSON.stringify(logindata))
        await localStorage.setItem("token", JSON.stringify(logindata.token));
      await localStorage.setItem("loggedIn", true);
      navigate('/AllUsers')
        // window.location.href = "./userDetails";
      }
    } catch (error) {
      alert("Something error");
    }
    }
  }

  return (

    <div  className="auth-wrapper">
      <div className="auth-inner">

        <h3>Sign In</h3>

        <div className="mb-4">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button onClick={() => handleSubmit()} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        {/* <p className="forgot-password text-right">
            <a href="/sign-up">Don't Have an account ? Create</a>
          </p> */}

      </div>
    </div>
  );
}