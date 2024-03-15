import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

export const Expense = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: '100%',
          height: 700,
          bgcolor: theme.palette.error.main,
          borderRadius: 0,
        },
      }}
    >
      <Paper elevation={2}></Paper>
    </Box>
  );
};
