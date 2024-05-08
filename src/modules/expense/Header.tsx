import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { styled, Theme } from '@mui/material/styles';
import { Title3 } from '@shared-components/Title3';
import { colors } from 'src/styles/colors';
import { Regular1 } from '../../shared-components/Regular1';

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
      <Title3>Expense</Title3>
      <Regular1 style={{ color: colors.red[100] }}>s</Regular1>
    </StyledDivHeader>
  );
};

//No longer requisite
