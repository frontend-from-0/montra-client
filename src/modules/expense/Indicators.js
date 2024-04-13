import React from 'react';

const Indicators = ({ activeIndex, onClick, sliderData }) => {
  return (
    <div className='all-indicators'>
      {sliderData.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? 'indicator active-indicator' : 'indicator'}`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </div>
  );
};

export default Indicators;
