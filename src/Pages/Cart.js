import React, { useState } from "react";
import "./Cart.css";
import Navbar from "../Components/HomePageComponents/Navbar";
import Announcements from "../Components/HomePageComponents/Announcements";
import Footer from "../Components/HomePageComponents/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [isVisible, setIsVisible] = useState(false);

  const modalHandler = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="CartContainer">
      <Navbar />
      <Announcements />
      <div className="CartWrapper">
        <h1 className="CartTitle">Your Bag</h1>
        <div className="CartTop">
          <Link to={"/products"}>
            <button className="CartTopButton">Continue Shopping</button>
          </Link>
          <button className="CartTopButton" onClick={modalHandler}>
            Checkout Now
          </button>
        </div>
        <div className="CartBottom">
          <div className="CartInfo">
            {cart.products.map((product) => (
              <div className="CartProduct">
                <div className="CartProductDetails">
                  <div className="CartDetails">
                    <img className="CartProductImage" src={product.image}></img>
                    <span className="CartProductName">
                      <b>Product:</b>
                      {product.title}
                    </span>
                    <span className="CartProductID">
                      <b>ID:</b>
                      {product._id}
                    </span>
                    <span className="CartProductSize">
                      <b>Color:</b>
                      {product.color}
                    </span>
                    <span className="CartProductSize">
                      <b>Size:</b>
                      {product.size}
                    </span>
                  </div>
                  <div className="CartPriceDetails">
                    <div className="CartProductAmountContainer">
                      <FontAwesomeIcon
                        icon={faPlus}
                        style={{ cursor: "pointer" }}
                      />
                      <span className="CartProductAmount">
                        {product.quantity}
                      </span>
                      <FontAwesomeIcon
                        icon={faMinus}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                    <span className="CartProductAmount">
                      ${product.price * product.quantity}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="CartSummary">
            <h1 className="CartSummaryTitle">Order Summary</h1>
            <div className="CartSummaryItem">
              <span className="CartSummaryItemText">Subtotal</span>
              <span className="CartSummaryItemPrice">${cart.total}</span>
            </div>
            <div className="CartSummaryItem">
              <span className="CartSummaryItemText">Tax</span>
              <span className="CartSummaryItemPrice">
                ${(cart.total * 0.17).toFixed(0)}
              </span>
            </div>
            <div className="CartSummaryItem">
              <span className="CartSummaryItemText">Total</span>
              <span className="CartSummaryItemPrice">
                ${(cart.total + cart.total * 0.17).toFixed(0)}
              </span>
            </div>
            <button className="CartTopButton" onClick={modalHandler}>
              CheckOut Now
            </button>
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="ModalContainer">
          <div className="ModalWrapper">
            <h1 className="ModalTitle">Thanks you for your purchase</h1>
            <p className="ModalContent">
              Order will be shipped to you in the next business day
            </p>
            <div className="ModalButtons">
              <button className="ModalButton" onClick={modalHandler}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

//2.30.43

export default Cart;
