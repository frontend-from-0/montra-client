import { Box, LinearProgress } from '@mui/material';
import { colors } from 'src/styles/colors';
import { theme } from 'src/styles/theme';

interface ProgressBarProps {
  color: string;
  progressValue: number;
}

export const ProgressBar = ({ color, progressValue }: ProgressBarProps) => {
  return (
    <Box>
      <LinearProgress
        variant='determinate'
        value={progressValue}
        sx={{
          backgroundColor: colors.light[20],
          height: '12px',
          borderRadius: theme.shape.borderRadius * 6,
          '& .MuiLinearProgress-bar': {
            backgroundColor: color,
            borderRadius: theme.shape.borderRadius * 6,
          },
        }}
      />
    </Box>
  );
};
