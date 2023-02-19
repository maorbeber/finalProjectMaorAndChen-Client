import React from "react";
import "./Register.css";

const Login = () => {
  return (
    <div className="RegisterContainer">
      <div className="RegisterWrapper">
        <h1 className="RegisterTitle">Sign In</h1>
        <form className="RegisterForm">
          <input placeholder="UserName" className="RegisterInput"></input>
          <input placeholder="Password" className="RegisterInput"></input>
          <button className="RegisterButton">Login</button>
        </form>
        <a className="RegisterLink">Forgot Password?</a>
        <a className="RegisterLink">Create a new Account</a>
      </div>
    </div>
  );
};

export default Login;
