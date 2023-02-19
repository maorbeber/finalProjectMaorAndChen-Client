// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import "./Slider.css";
import { sliderItems } from "../../data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const ClickHandler = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
    const sliderWrapper = document.querySelector(".SliderWrapper");
    sliderWrapper.style.setProperty("--slide-index", slideIndex);
  };

  return (
    <div className="SliderContainer">
      <div
        className="Arrow"
        onClick={() => ClickHandler("left")}
        data-direction="left"
      >
        {/* <ArrowLeftOutlined></ArrowLeftOutlined> */}
      </div>
      <div className="SliderWrapper" data-slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <div className="Slide" key={item.id}>
            <div className="ImgContainer">
              <img className="Image" src={item.img}></img>
            </div>
            <div className="InfoContainer">
              <h1 className="SliderTitle">{item.title}</h1>
              <p className="SliderDescription">{item.desc}</p>
              <button className="SliderButton">Push here</button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="Arrow"
        data-direction="right"
        onClick={() => ClickHandler("right")}
      >
        {/* <ArrowRightOutlined></ArrowRightOutlined> */}
      </div>
    </div>
  );
};

export default Slider;
