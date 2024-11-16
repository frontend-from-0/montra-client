import { useTheme } from '@mui/material';
import Slider from '@mui/material/Slider';
import { colors } from 'src/styles/colors';

interface CustomSliderProps {
  defaultValue: number;
  color: string;
}

export const CustomSlider = ({ defaultValue, color }: CustomSliderProps) => {
  const theme = useTheme();
  return (
    <Slider
      defaultValue={defaultValue}
      valueLabelDisplay='auto'
      aria-label='Default'
      sx={{
        color: color,
        '& .MuiSlider-thumb': {
          bgcolor: color,
          width: 54,
          height: 30,
          border: `${theme.spacing()} solid ${colors.light[100]}`,
          borderRadius: theme.shape.borderRadius * 6,
          position: 'relative',
        },
        '& .MuiSlider-track': {
          bgcolor: color,
        },
        '& .MuiSlider-rail': {
          bgcolor: colors.light[20],
        },
      }}
    />
  );
};
