import React from "react";
import "./NewsLetter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const NewsLetter = () => {
  return (
    <div className="NewsLetterContainer">
      <h1 className="NewsLetterTitle">News Letter</h1>
      <div className="NewLetterDesc">Get constant updates about our store</div>
      <div className="NewsLetterInputContainer">
        <input className="NewsLetterInput" placeholder="Your E-mail"></input>
        <button className="NewsLetterButton">
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

//1.21.00

export default NewsLetter;
