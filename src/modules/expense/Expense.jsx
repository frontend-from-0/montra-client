import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

export const Expense = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          height: '910px',
          backgroundColor: 'black',
        }}
      >
        <Box
          sx={{
            height: '900px',
            backgroundColor: '#FD3C4A',
          }}
        >
          <Typography>
            <DateTime></DateTime>
          </Typography>
          <Paper
            className='paper'
            sx={{
              borderRadius: '30px 30px 0 0',
              height: '500px',
              // marginBottom: 0,
              // mt: '23.5rem',
              mb: 0,
            }}
            elevation={2}
          >
            Saffet
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export const DateTime = () => {
  var [date, setDate] = useState(new Date());

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p>Time: {date.toLocaleDateString()}</p>
    </div>
  );
};

export default DateTime;
