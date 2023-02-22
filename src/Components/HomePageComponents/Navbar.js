import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//keep for now
import { logout, makeAdmin } from "../../redux/apiCalls";
import { useState } from "react";

const Navbar = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  const [email, setEmail] = useState("");
  //keep for now
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    if (user) {
      e.preventDefault();
      logout(dispatch);
    }
  };
  const adminHandler = () => {
    if (!user.admin) {
      setEmail(user.email);
      makeAdmin(dispatch, email);
    }
  };
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
          <Link className="logo" to={"/"}>
            M&C
          </Link>
        </div>
        <div className="right">
          {!user && (
            <Link to={"/register"} className="MenuItem">
              Register
            </Link>
          )}
          <Link to={"/login"} className="MenuItem" onClick={logoutHandler}>
            {user ? "Sign out" : "Sign in"}
          </Link>
          {user && !user.admin && (
            <div className="MenuItem" onClick={adminHandler}>
              Become Admin
            </div>
          )}
          <div className="MenuItem">
            <Link to="/cart">
              <span class="fa-layers fa-fw">
                <FontAwesomeIcon icon={faCartShopping} />
                {quantity > 0 && (
                  <span
                    class="fa-layers-counter animated"
                    style={{
                      fontSize: "2.5em",
                      position: "absolute",
                      top: "-0.2em",
                      right: "-0.2em",
                      backgroundColor: "teal",
                    }}
                  >
                    {quantity}
                  </span>
                )}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
