import { Typography } from '@mui/material';
import { Title1 } from '../../../../shared-components/Title1';
import './styles.css';

export const SliderContent = ({ activeIndex, sliderData }) => {
  return (
    <>
      {sliderData.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? 'slides active' : 'inactive'}
        >
          <img src={slide.image} alt='' />
          <Title1>{slide.title}</Title1>
          <Typography variant='body1'>{slide.description}</Typography>
        </div>
      ))}
    </>
  );
};
