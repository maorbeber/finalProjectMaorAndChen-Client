// import { Badge, IconButton, MenuItem } from "@material-ui/core";
// import { Search, ShoppingCart, ShoppingCartOutlined } from "@material-ui/icons";
//import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <div className="langauge">EN </div>
          <div className="SerachContainer">
            <div className="input"></div>
          </div>
        </div>
        <div className="center">
          <div className="logo">M&C</div>
        </div>
        <div className="right">
          <div className="MenuItem">Register</div>
          <div className="MenuItem">Sign In</div>
          <div className="MenuItem">
            <FontAwesomeIcon icon={faCartShopping} /> 0
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
