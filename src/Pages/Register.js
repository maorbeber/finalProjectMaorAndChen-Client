import React from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const createHandler = async (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const username = e.target.elements.userName.value;
    const password = e.target.elements.password.value;
    const confirmPassword = e.target.elements.confirmPassword.value;
    if (password != confirmPassword) {
      console.log("passwords does not match");
      //todo create a modal for this
    } else {
      try {
        await axios.post(`http://localhost:3001/api/auth/register`, {
          username: username,
          email: email,
          password: password,
        });
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="RegisterContainer">
      <div className="RegisterWrapper">
        <h1 className="RegisterTitle">Create An Account</h1>
        <form className="RegisterForm" onSubmit={createHandler}>
          <input
            placeholder="First Name"
            name="firstName"
            className="RegisterInput"
            required
          ></input>
          <input
            placeholder="Last Name"
            name="lastName"
            className="RegisterInput"
            required
          ></input>
          <input
            placeholder="User Name"
            name="userName"
            className="RegisterInput"
            required
          ></input>
          <input
            placeholder="Email"
            name="email"
            type={"email"}
            className="RegisterInput"
            required
          ></input>
          <input
            placeholder="Password"
            name="password"
            className="RegisterInput"
            required
          ></input>
          <input
            placeholder="Confirm Password"
            className="RegisterInput"
            name="confirmPassword"
            required
          ></input>
          <button className="RegisterButton">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
