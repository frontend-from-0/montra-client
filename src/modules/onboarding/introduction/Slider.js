import React, { useState } from "react";
import SliderContent from "./SliderContent";
import ImageSlider from "./ImageSlider";
import Dots from "./Dots";
import "./Slider.css";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} imageSlider={ImageSlider} />
      <Dots
        activeIndex={activeIndex}
        imageSlider={ImageSlider}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;
