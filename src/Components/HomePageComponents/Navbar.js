// import { Badge, IconButton, MenuItem } from "@material-ui/core";
// import { Search, ShoppingCart, ShoppingCartOutlined } from "@material-ui/icons";
//import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <div className="langauge">EN </div>
          <div className="SerachContainer">
            <div className="input"></div>
            {/* <IconButton>
              <Search style={{ color: "gray", fontSize: 16 }} />
            </IconButton> */}
          </div>
        </div>
        <div className="center">
          <div className="logo">M&C</div>
        </div>
        <div className="right">
          <div className="MenuItem">Register</div>
          <div className="MenuItem">Sign In</div>
          <div className="MenuItem">
            {/* <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
