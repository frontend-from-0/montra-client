import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { colors } from 'src/styles/colors';

const StyledDivHeader = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginTop: '20px',
}));

interface Title3Props {
  children: string | JSX.Element;
}

export const Title3 = ({ children }: Title3Props) => {
  return (
    <StyledDivHeader>
      <ArrowBackIcon fontSize='large' sx={{ color: 'white' }} />
      <Typography variant='h5' sx={{ color: 'white' }}>
        {children}
      </Typography>
      <Typography style={{ color: colors.red[100] }}>s</Typography>
    </StyledDivHeader>
  );
};
