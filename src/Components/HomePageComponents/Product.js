import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { addProduct } from "../../redux/cartRedux";
import "../../Pages/Cart.css";
import "../../Pages/Register.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { isAdmin } from "../../redux/apiCalls";

const Product = ({ item, onDelete }) => {
  const user = useSelector((state) => state.user.currentUser);
  const [admin, setAdmin] = useState(false);
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      isAdmin(user.email).then((data) => setAdmin(data));
    }
  }, [admin]);
  const deleteHandler = async () => {
    try {
      await axios.get(`http://localhost:3001/api/products/delete/${item._id}`);
      onDelete();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="ProductContainer">
      <div className="ProductCircle"></div>
      <img className="ProductImage" src={item.image}></img>
      {user && (
        <div className="ProductInfo">
          <div className="ProductIcon">
            <Link to={`/product/${item._id}`}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
          </div>
          {admin && (
            <div className="ProductIcon" onClick={deleteHandler}>
              <FontAwesomeIcon icon={faTrash} />
            </div>
          )}
          {admin && (
            <div className="ProductIcon">
              <Link to={`/EditProduct/${item._id}`}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Product;
