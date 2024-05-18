import { useState } from 'react';
import { SliderContent } from './SliderContent';
import { sliderData } from './sliderData';
import { Indicators } from './Indicators';
import { styled } from '@mui/material/styles';

const StyledDiv = styled(`div`)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  flex: 1,
});

export const Slider = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  return (
    <StyledDiv>
      <SliderContent activeIndex={activeIndex} sliderData={sliderData} />
      <Indicators
        activeIndex={activeIndex}
        sliderData={sliderData}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </StyledDiv>
  );
};
