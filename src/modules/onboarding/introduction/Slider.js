import React, { useState } from "react";
import { SliderContent } from "./SliderContent";
import { sliderData } from "./sliderData";
import Dots from "./Dots";
import "./Slider.css";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderData={sliderData} />
      <Dots
        activeIndex={activeIndex}
        sliderData={sliderData}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;
