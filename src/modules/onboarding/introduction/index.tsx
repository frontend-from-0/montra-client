import { Stack, Button } from '@mui/material';
import Slider from './Slider';
import { Paper } from '../../../shared-components/Paper/Paper';
import { styled, Theme } from '@mui/material/styles';

const StyledDiv = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: `calc(100vh - ${theme.spacing(3)})`,
}));

export const Introduction = () => {
  return (
    <Paper>
      <StyledDiv>
        <Slider />
        <Stack spacing={2} direction='column'>
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
        </Stack>
      </StyledDiv>
    </Paper>
  );
};
