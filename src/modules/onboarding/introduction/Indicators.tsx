import { SliderData } from './sliderData';
// TODO: extarnal CSS to be replaces with Styled components
import './Slider.css';

interface IndicatorsProps {
  activeIndex: number;
  onClick: (index: number) => void;
  sliderData: SliderData[];
}

export const Indicators = ({
  activeIndex,
  onClick,
  sliderData,
}: IndicatorsProps) => {
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
