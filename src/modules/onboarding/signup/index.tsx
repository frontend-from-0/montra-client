import { Stack, Button } from '@mui/material';
import Link from '@mui/material/Link';
import { Paper } from '../../../shared-components/Paper/Paper';
import { styled, Theme } from '@mui/material/styles';
import { Regular1 } from '../../../shared-components/Regular1';

const StyledDiv = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: `calc(100vh - ${theme.spacing(3)})`,
}));

export const SignUp = () => {
  return (
    <Paper>
      <StyledDiv>
        <Stack spacing={2} direction='column'>
          <Button
            color='primary'
            variant='contained'
            size='large'
            sx={{ textTransform: 'none' }}
            disableElevation
          >
            Sign Up
          </Button>
          <Regular1>Or with</Regular1>
          <Button
            color='secondary'
            variant='outlined'
            size='large'
            sx={{ color: 'black', textTransform: 'none' }}
            disableElevation
          >
            Sign Up with Google
          </Button>
          <Regular1>Already have an account? Login</Regular1>
        </Stack>
      </StyledDiv>
    </Paper>
  );
};
