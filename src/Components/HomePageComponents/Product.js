import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Product = ({ item }) => {
  const user = useSelector((state) => state.user.currentUser);
  const id = "";
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const clickHandler = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3001/api/products/find/${item._id}`
      );
      setProduct(res.data);
    } catch (err) {}
    setQuantity(1);
    dispatch(addProduct({ ...product, quantity }));
  };
  return (
    <div className="ProductContainer">
      <div className="ProductCircle"></div>
      <img className="ProductImage" src={item.image}></img>
      {user && (
        <div className="ProductInfo">
          {user.admin && (
            <div className="ProductIcon">
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
          )}
          <div className="ProductIcon">
            <Link to={`/product/${item._id}`}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
          </div>
          {/* <div className="ProductIcon">
          <FontAwesomeIcon icon={faHeart} />
        </div> */}
        </div>
      )}
    </div>
  );
};

export default Product;
