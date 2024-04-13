import React, { useState } from 'react';
import { sliderData } from './SliderData';
import Indicators from './Indicators';
import './Slider.css';

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='slider-container'>
      <Indicators
        activeIndex={activeIndex}
        sliderData={sliderData}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
};

export default Slider;
