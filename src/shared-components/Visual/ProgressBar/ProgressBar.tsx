import { Box, LinearProgress } from '@mui/material';
import { theme } from 'src/styles/theme';

interface ProgressBarProps {
  trackColor: string;
  progressValue: number;
  railColor: string;
  height: number;
}

export const ProgressBar = ({
  trackColor,
  progressValue,
  railColor,
  height,
}: ProgressBarProps) => {
  return (
    <Box>
      <LinearProgress
        variant='determinate'
        value={progressValue}
        sx={{
          backgroundColor: railColor,
          height: height,
          borderRadius: theme.shape.borderRadius * 6,
          '& .MuiLinearProgress-bar': {
            backgroundColor: trackColor,
            borderRadius: theme.shape.borderRadius * 6,
          },
        }}
      />
    </Box>
  );
};
