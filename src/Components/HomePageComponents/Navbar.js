import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
//keep for now
import { logout, makeAdmin, isAdmin } from "../../redux/apiCalls";
import { useEffect, useState } from "react";
import "../../Pages/Cart.css";

const Navbar = () => {
  const location = useLocation();
  const adminPage = location.pathname == "/admin";
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      isAdmin(user.email).then((data) => setAdmin(data));
    }
  }, []);
  const logoutHandler = (e) => {
    if (user) {
      e.preventDefault();
      logout(dispatch);
      navigate("/");
    }
  };
  const addProductHandler = () => {
    setIsVisible(!isVisible);
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
          {user && admin && !adminPage && (
            <Link to={"/admin"} className="MenuItem">
              Admin Page
            </Link>
          )}
          {adminPage && (
            <Link
              to={"/addProduct"}
              className="MenuItem"
              onClick={addProductHandler}
            >
              Add product
            </Link>
          )}
          {adminPage && (
            <Link
              to={"/manageAdmins"}
              className="MenuItem"
              onClick={addProductHandler}
            >
              Manage Admins
            </Link>
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
