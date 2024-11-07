import { Box } from '@mui/material';
import Slider from '@mui/material/Slider';
import { theme } from 'src/styles/theme';

interface CustomSliderProps {
  defaultValue: number;
  color: string;
  thumbbgcolor: string;
  trackcolor: string;
  railcolor: string;
}

export const CustomSlider = ({
  defaultValue,
  color,
  thumbbgcolor,
  trackcolor,
  railcolor,
}: CustomSliderProps) => {
  return (
    <Box sx={{ width: 343 }}>
      <Slider
        defaultValue={defaultValue}
        valueLabelDisplay='auto'
        aria-label='Default'
        sx={{
          color: color,
          '& .MuiSlider-thumb': {
            bgcolor: thumbbgcolor,
            width: 54,
            height: 30,
            border: '4px solid #fff',
            borderRadius: theme.shape.borderRadius * 6,
            position: 'relative',
          },
          '& .MuiSlider-track': {
            bgcolor: trackcolor,
          },
          '& .MuiSlider-rail': {
            bgcolor: railcolor,
          },
        }}
      />
    </Box>
  );
};
