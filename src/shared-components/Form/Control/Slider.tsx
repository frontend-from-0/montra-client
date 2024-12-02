import { Box } from '@mui/material';
import Slider from '@mui/material/Slider';
import { theme } from 'src/styles/theme';

interface CustomSliderProps {
  defaultValue: number;
  color: string;
  railcolor: string;
}

export const CustomSlider = ({
  defaultValue,
  color,
  railcolor,
}: CustomSliderProps) => {
  return (
    <Box sx={{ margin: `${theme.spacing(0)} ${theme.spacing(6)}` }}>
      <Slider
        defaultValue={defaultValue}
        valueLabelDisplay='auto'
        aria-label='Default'
        sx={{
          color: color,
          '& .MuiSlider-thumb': {
            width: 54,
            height: 30,
            border: '4px solid #fff',
            borderRadius: theme.shape.borderRadius * 6,
            position: 'relative',
          },
          '& .MuiSlider-rail': {
            bgcolor: railcolor,
          },
        }}
      />
    </Box>
  );
};
