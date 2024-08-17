import { styled, Theme } from '@mui/material/styles';
import { HalfTypeNavigation } from '../../shared-components/Navigation/TopNavigation/HalfTypeNavigation';
import { colors } from 'src/styles/colors';

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
      <HalfTypeNavigation title='Expense' color={colors.light[100]} />
    </StyledDivHeader>
  );
};

//No longer requisite
