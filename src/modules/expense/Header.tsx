import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled, Theme } from '@mui/material/styles';
import { Title3 } from '@shared-components/Typography/Title3';
import { colors } from 'src/styles/colors';
import { Regular1 } from '../../shared-components/Typography/Regular1';

const StyledDivHeader = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginTop: `${theme.spacing(3)}`,
}));

export const Header = () => {
  return (
    <StyledDivHeader>
      <ArrowBackIcon fontSize='large' sx={{ color: 'white' }} />
      <Title3 color={colors.light[100]}>Expense</Title3>
    </StyledDivHeader>
  );
};

//No longer requisite
