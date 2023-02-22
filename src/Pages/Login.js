import React, { useState } from "react";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import "./Register.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const loginHandler = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <div className="RegisterContainer">
      <div className="RegisterWrapper">
        <h1 className="RegisterTitle">Sign In</h1>
        <form className="RegisterForm">
          <input
            placeholder="UserName"
            className="RegisterInput"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            placeholder="Password"
            className="RegisterInput"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className="RegisterButton"
            onClick={loginHandler}
            disabled={isFetching}
          >
            Login
          </button>
          {error && <span className="RegisterError">Something went wrong</span>}
        </form>
        <a className="RegisterLink">Forgot Password?</a>
        <a className="RegisterLink">Create a new Account</a>
      </div>
    </div>
  );
};

export default Login;
