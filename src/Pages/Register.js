import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="RegisterContainer">
      <div className="RegisterWrapper">
        <h1 className="RegisterTitle">Create An Account</h1>
        <form className="RegisterForm">
          <input placeholder="First Name" className="RegisterInput"></input>
          <input placeholder="Last Name" className="RegisterInput"></input>
          <input placeholder="UserName" className="RegisterInput"></input>
          <input placeholder="Email" className="RegisterInput"></input>
          <input placeholder="Password" className="RegisterInput"></input>
          <input
            placeholder="Confirm Password"
            className="RegisterInput"
          ></input>
          <button className="RegisterButton">Create</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
