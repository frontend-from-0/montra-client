import { styled, Theme } from '@mui/material/styles';
import { PriceSection } from './PriceSection';
import { Form } from './Form';
import { colors } from 'src/styles/colors';
import { Title3 } from '../../shared-components/Typography/Title3';

const StyledDiv = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: `calc(100vh - ${theme.spacing(3)})`,
  backgroundColor: colors.red[100],
}));

const StyledDivUpperSide = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: colors.red[100],
  minHeight: '300px',
}));

const StyledDivBottomSide = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  backgroundColor: colors.light[100],
  marginBottom: '0',
  borderRadius: '32px 32px 0 0',
}));

export const Expense = () => {
  return (
    <StyledDiv>
      <StyledDivUpperSide>
        <Title3>Expense</Title3>
        <PriceSection />
      </StyledDivUpperSide>
      <StyledDivBottomSide>
        <Form />
      </StyledDivBottomSide>
    </StyledDiv>
  );
};
