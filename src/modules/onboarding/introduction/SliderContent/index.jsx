import { Title1 } from '../../../../shared-components/Typography/Title1';
import './styles.css';
import { Regular1 } from '../../../../shared-components/Typography/Regular1';

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
          <Regular1>{slide.description}</Regular1>
        </div>
      ))}
    </>
  );
};
