import { Stack, Button } from '@mui/material';
import { Slider } from './Slider';
import { Paper } from '../../../shared-components/Paper/Paper';
import { styled, Theme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledDiv = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: theme.spacing(2),
  minHeight: `calc(100vh - ${theme.spacing(3)})`,
}));

export const Introduction = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/onboarding/sign-up');
  };

  return (
    <Paper>
      <StyledDiv>
        <Slider />
        <Stack spacing={2} direction='column'>
          <Button
            color='primary'
            variant='contained'
            size='large'
            onClick={handleClick}
          >
            Sign Up
          </Button>
          <Button color='secondary' variant='contained' size='large'>
            Login
          </Button>
        </Stack>
      </StyledDiv>
    </Paper>
  );
};
