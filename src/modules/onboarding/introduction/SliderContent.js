import { Typography } from "@mui/material";
import React from "react";

const SliderContent = ({ activeIndex, imageSlider }) => {
  return (
    <section>
      {imageSlider.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img src={slide.image} alt="" />
          <Typography variant="h3">{slide.title}</Typography>
          <Typography variant="body1">{slide.description}</Typography>
        </div>
      ))}
    </section>
  );
};

export default SliderContent;
