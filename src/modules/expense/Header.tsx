import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Title3 } from '@shared-components/Title3';
import { colors } from 'src/styles/colors';

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
      <Title3>Expense</Title3>
      <Typography style={{ color: colors.red[100] }}>s</Typography>
    </StyledDivHeader>
  );
};

//No longer requisite
