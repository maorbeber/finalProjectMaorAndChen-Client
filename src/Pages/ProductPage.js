import React from "react";
import Announcements from "../Components/HomePageComponents/Announcements";
import Footer from "../Components/HomePageComponents/Footer";
import Navbar from "../Components/HomePageComponents/Navbar";
import NewsLetter from "../Components/HomePageComponents/NewsLetter";
import "./ProductPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const ProductPage = () => {
  return (
    <div className="ProductPageContainer">
      <Navbar />
      <Announcements />
      <div className="ProductPageWrapper">
        <div className="ProductPageImgContainer">
          <img
            className="ProductPageImage"
            src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"
          ></img>
        </div>
        <div className="ProductPageInfoContainer">
          <h1 className="ProductPageTitle">Shirt</h1>
          <p className="ProductPageDesc">
            Most beatiful shirt ever made among human kind
          </p>
          <span className="ProductPagePrice">$350</span>
          <div className="ProductPageFilterContainer">
            <div className="ProductPageFilter">
              <span className="ProductPageFilterTitle">Size</span>
              <select className="ProductPageFilterSize">
                <option
                  className="ProductPageFilterSizeOption"
                  disabled
                  selected
                >
                  Size
                </option>
                <option className="ProductPageFilterSizeOption">XS</option>
                <option className="ProductPageFilterSizeOption">S</option>
                <option className="ProductPageFilterSizeOption">M</option>
                <option className="ProductPageFilterSizeOption">L</option>
                <option className="ProductPageFilterSizeOption">XL</option>
              </select>
            </div>
          </div>
          <div className="ProductPageAddContainer">
            <div className="ProductPageAmountContainer">
              <FontAwesomeIcon icon={faPlus} style={{ cursor: "pointer" }} />
              <span className="ProductPageAmount">1</span>
              <FontAwesomeIcon icon={faMinus} style={{ cursor: "pointer" }} />
            </div>
            <button className="ProductPageButton">Add To Cart</button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

//1:59:30 creating the register and login pages
export default ProductPage;
