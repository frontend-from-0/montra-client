import { Stack, Button } from '@mui/material';
import { Paper } from '../../shared-components/Paper/Paper';
import { styled, Theme } from '@mui/material/styles';
import { InfoBar } from '../../shared-components/InfoBar';
import { Header } from './Header';
import { PriceSection } from './PriceSection';
import { Form } from './Form';

const StyledDiv = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: `calc(100vh - ${theme.spacing(3)})`,
  backgroundColor: '#FD3C4A',
}));

const StyledDivUpperSide = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#FD3C4A',
  minHeight: '300px',
}));

const StyledDivBottomSide = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  backgroundColor: '#FAF9F6',
  minHeight: '600px',
  marginBottom: '0',
  borderRadius: '32px 32px 0 0',
}));

export const Expense = () => {
  return (
    <Paper>
      <StyledDiv>
        <StyledDivUpperSide>
          <InfoBar />
          <Header />
          <PriceSection />
        </StyledDivUpperSide>
        <StyledDivBottomSide>
          <Form />
        </StyledDivBottomSide>
      </StyledDiv>
    </Paper>
  );
};
