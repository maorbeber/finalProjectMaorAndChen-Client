import React, { useEffect, useState } from "react";
import Announcements from "../Components/HomePageComponents/Announcements";
import Footer from "../Components/HomePageComponents/Footer";
import Navbar from "../Components/HomePageComponents/Navbar";
import NewsLetter from "../Components/HomePageComponents/NewsLetter";
import "./ProductPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3001/api/products/find/${id}`
        );
        setProduct(res.data);
      } catch (err) {}
    };
    getProduct();
  }, [id]);
  const handleQuantity = (action) => {
    if (action == "inc") {
      setQuantity(quantity + 1);
    } else if (action == "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    }
  };
  const clickHandler = () => {
    dispatch(addProduct({ ...product, quantity}));
  };
  return (
    <div className="ProductPageContainer">
      <Navbar />
      <Announcements />
      <div className="ProductPageWrapper">
        <div className="ProductPageImgContainer">
          <img className="ProductPageImage" src={product.image}></img>
        </div>
        <div className="ProductPageInfoContainer">
          <h1 className="ProductPageTitle">{product.title}</h1>
          <p className="ProductPageDesc">{product.desc}</p>
          <p className="ProductPageDesc">{product.color}</p>
          <span className="ProductPagePrice">${product.price}</span>
          <div className="ProductPageFilterContainer">
            <div className="ProductPageFilter">
              <span className="ProductPageFilterTitle">{product.size}</span>
              <select className="ProductPageFilterSize">
                <option className="ProductPageFilterSizeOption" disabled>
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
              <FontAwesomeIcon
                icon={faPlus}
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("inc")}
              />
              <span className="ProductPageAmount">{quantity}</span>
              <FontAwesomeIcon
                icon={faMinus}
                style={{ cursor: "pointer" }}
                onClick={() => handleQuantity("dec")}
              />
            </div>
            <button className="ProductPageButton" onClick={clickHandler}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

//48:20
export default ProductPage;
