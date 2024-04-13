import Typography from '@mui/material/Typography';
import { Stack, Button } from '@mui/material';
import { Paper } from '../../shared-components/Paper/Paper';
import { styled, Theme } from '@mui/material/styles';
import { InfoBar } from '../../shared-components/InfoBar';

const StyledDiv = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: `calc(100vh - ${theme.spacing(3)})`,
  backgroundColor: '#FD3C4A',
}));

const StyledDivUpperSide = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  backgroundColor: '#FD3C4A',
  minHeight: '300px',
}));

const StyledDivBottomSide = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  backgroundColor: '#F9F6EE',
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
        </StyledDivUpperSide>
        <StyledDivBottomSide></StyledDivBottomSide>
        {/* <StyledDiv2>saffet</StyledDiv2> */}
        {/* <Stack spacing={2} direction='column'>
          <Button
            color='primary'
            variant='contained'
            size='large'
            disableElevation
          >
            Sign Up
          </Button>
          <Button
            color='secondary'
            variant='contained'
            size='large'
            disableElevation
          >
            Login
          </Button>
        </Stack> */}
      </StyledDiv>
    </Paper>
  );
};
