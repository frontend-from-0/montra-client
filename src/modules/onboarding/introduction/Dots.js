import React from "react";

const Dots = ({ activeIndex, onClick, sliderData }) => {
  return (
    <div className="all-dots">
      {sliderData.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
