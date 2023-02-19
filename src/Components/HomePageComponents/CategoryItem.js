import React from "react";
import { Link } from "react-router-dom";
import "./CategoryItem.css";

const CategoryItem = ({ item }) => {
  return (
    <div className="CategoryItemContainer">
      <Link to={"/products"}>
        <img className="CategoryItemImage" src={item.img}></img>
        <div className="CategoryItemInfo">
          <h1 className="CategoryItemTitle">{item.title}</h1>
          <button className="CategoryItemButton">Shop Now</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
