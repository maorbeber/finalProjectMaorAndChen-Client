import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterLeft">
        <h1 className="FooterLogo"></h1>
        <p className="FooterDesc">This is the footer elements of our shop</p>
        <div className="FooterSocialContainer">
          <div className="FooterSocialIcon">
            <FontAwesomeIcon icon={faFacebook} />
          </div>
        </div>
      </div>
      <div className="FooterCenter">
        <h3 className="FooterTitle">Useful Links</h3>
        <ul className="FooterList">
          <Link className="FooterListItem" to={"/"}>
            Home
          </Link>
          <Link className="FooterListItem" to={"/cart"}>
            Cart
          </Link>
          <Link className="FooterListItem" to={"/products"}>
            Shop
          </Link>
          <li className="FooterListItem">My Account</li>
        </ul>
      </div>
      <div className="FooterRight">
        <h3 className="FooterTitle">Contacts</h3>
        <div className="FooterContactItem">
          <FontAwesomeIcon icon={faLocationDot} />
          Givat Shmuel
        </div>
        <div className="FooterContactItem">
          <FontAwesomeIcon icon={faPhone} />
          +975-54-954-2812
        </div>
        <div className="FooterContactItem">
          <FontAwesomeIcon icon={faEnvelope} />
          maorbber@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
