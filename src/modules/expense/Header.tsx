import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledDivHeader = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginTop: '20px',
}));

export const Header = () => {
  return (
    <StyledDivHeader>
      <ArrowBackIcon fontSize='large' sx={{ color: 'white' }} />
      <Typography variant='h5' sx={{ color: 'white' }}>
        Expense
      </Typography>
      <Typography style={{ color: '#FD3C4A' }}>s</Typography>
    </StyledDivHeader>
  );
};
