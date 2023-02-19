// import { IconButton } from "@material-ui/core";
// import {
//   FavoriteBorderOutlined,
//   SearchOutlined,
//   ShoppingCartOutlined,
// } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faCartShopping,
  faMagnifyingGlass,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

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
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
        <div className="ProductIcon">
          <FontAwesomeIcon icon={faHeart} />
        </div>
      </div>
    </div>
  );
};

export default Product;
