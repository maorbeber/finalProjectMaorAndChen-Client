import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ item }) => {
  return (
    <div className="ProductContainer">
      <div className="ProductCircle"></div>
      <img className="ProductImage" src={item.image}></img>
      <div className="ProductInfo">
        <div className="ProductIcon">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
        <div className="ProductIcon">
          <Link to={`/product/${item._id}`}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Link>
        </div>
        <div className="ProductIcon">
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </div>
  );
};

export default Product;
