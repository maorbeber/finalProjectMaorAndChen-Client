import React from "react";
import "./Cart.css";
import Navbar from "../Components/HomePageComponents/Navbar";
import Announcements from "../Components/HomePageComponents/Announcements";
import Footer from "../Components/HomePageComponents/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  return (
    <div className="CartContainer">
      <Navbar />
      <Announcements />
      <div className="CartWrapper">
        <h1 className="CartTitle">Your Bag</h1>
        <div className="CartTop">
          <button className="CartTopButton">Continue Shopping</button>
          <div className="CartTopTexts">
            <span className="CartTopText">Shopping Bag (2)</span>
            <span className="CartTopText">WishList (0)</span>
          </div>
          <button className="CartTopButton">Checkout Now</button>
        </div>
        <div className="CartBottom">
          <div className="CartInfo">
            <div className="CartProduct">
              <div className="CartProductDetails">
                <div className="CartDetails">
                  <img
                    className="CartProductImage"
                    src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"
                  ></img>
                  <span className="CartProductName">
                    <b>Product:</b>good product
                  </span>
                  <span className="CartProductID">
                    <b>ID:</b>4568789
                  </span>
                  <span className="CartProductSize">
                    <b>Size:</b>L
                  </span>
                </div>
                <div className="CartPriceDetails">
                  <div className="CartProductAmountContainer">
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ cursor: "pointer" }}
                    />
                    <span className="CartProductAmount">2</span>
                    <FontAwesomeIcon
                      icon={faMinus}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <span className="CartProductAmount">$300</span>
                </div>
              </div>
            </div>
            <hr className="CartHr" />
            <div className="CartProduct">
              <div className="CartProductDetails">
                <div className="CartDetails">
                  <img
                    className="CartProductImage"
                    src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"
                  ></img>
                  <span className="CartProductName">
                    <b>Product:</b>good product
                  </span>
                  <span className="CartProductID">
                    <b>ID:</b>4568789
                  </span>
                  <span className="CartProductSize">
                    <b>Size:</b>L
                  </span>
                </div>
                <div className="CartPriceDetails">
                  <div className="CartProductAmountContainer">
                    <FontAwesomeIcon
                      icon={faPlus}
                      style={{ cursor: "pointer" }}
                    />
                    <span className="CartProductAmount">2</span>
                    <FontAwesomeIcon
                      icon={faMinus}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <span className="CartProductAmount">$300</span>
                </div>
              </div>
            </div>
          </div>
          <div className="CartSummary">
            <h1 className="CartSummaryTitle">Order Summary</h1>
            <div className="CartSummaryItem">
              <span className="CartSummaryItemText">Subtotal</span>
              <span className="CartSummaryItemPrice">$780</span>
            </div>
            <div className="CartSummaryItem">
              <span className="CartSummaryItemText">Tax</span>
              <span className="CartSummaryItemPrice">$20</span>
            </div>
            <div className="CartSummaryItem">
              <span className="CartSummaryItemText">Total</span>
              <span className="CartSummaryItemPrice">$800</span>
            </div>
            <button className="CartTopButton">CheckOut Now</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

//2.30.43

export default Cart;
