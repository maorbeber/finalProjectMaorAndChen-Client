import React, { useState } from "react";
import Announcements from "../Components/HomePageComponents/Announcements";
import Navbar from "../Components/HomePageComponents/Navbar";
import Products from "../Components/HomePageComponents/Products";
import NewsLetter from "../Components/HomePageComponents/NewsLetter";
import Footer from "../Components/HomePageComponents/Footer";
import "./ProductList.css";
import { useLocation } from "react-router-dom";

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const filterChangeHandler = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <div className="ProductListContainer">
      <Navbar />
      <Announcements />
      <h1 className="ProductListTitle">Dresses</h1>
      <div className="ProductListFilterContainer">
        <div className="ProductListFilter">
          <span className="ProductListFilterText">Filter Products</span>
          <select
            name="color"
            className="ProductListSelect"
            onChange={filterChangeHandler}
          >
            <option className="ProductListOption" disabled>
              Color
            </option>
            <option className="ProductListOption">All</option>
            <option className="ProductListOption">White</option>
            <option className="ProductListOption">Blue</option>
            <option className="ProductListOption">Red</option>
            <option className="ProductListOption">Black</option>
            <option className="ProductListOption">Yellow</option>
            <option className="ProductListOption">Green</option>
          </select>
          <select
            name="size"
            className="ProductListSelect"
            onChange={filterChangeHandler}
          >
            <option className="ProductListOption" disabled>
              Size
            </option>
            <option className="ProductListOption">All</option>
            <option className="ProductListOption">XS</option>
            <option className="ProductListOption">S</option>
            <option className="ProductListOption">M</option>
            <option className="ProductListOption">L</option>
            <option className="ProductListOption">XL</option>
          </select>
        </div>
        <div className="ProductListFilter">
          <span className="ProductListFilterText">Sort Products</span>
          <select
            className="ProductListSelect"
            onChange={(e) => setSort(e.target.value)}
          >
            <option className="ProductListOption" value="newest">
              Newest
            </option>
            <option className="ProductListOption" value="asc">
              Price (asc)
            </option>
            <option className="ProductListOption" value="desc">
              Price (desc)
            </option>
          </select>
        </div>
      </div>
      <Products filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </div>
  );
};

//1:42 starting to write single product page

export default ProductList;
