import React, { Component, useState } from "react";
import './assets/img1.jpg'
import { loginAuth } from '../../services/authService'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    try {
      const logindata = await loginAuth({ email, password })
      if (logindata) {
        alert("login successful");
        localStorage.setItem('logindata',)
        window.localStorage.setItem("token", data.data);
        window.localStorage.setItem("loggedIn", true);
        window.location.href = "./userDetails";
      }
    } catch (error) {
      alert("Something error");
    }
  }

  return (

    <div src={{}} className="auth-wrapper">
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