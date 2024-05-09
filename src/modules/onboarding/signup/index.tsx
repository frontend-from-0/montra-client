import {
  Stack,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Typography,
} from '@mui/material';
import { Paper } from '../../../shared-components/Paper/Paper';
import { styled, Theme } from '@mui/material/styles';
import { Regular1 } from '../../../shared-components/Regular1';
import GoogleIcon from '@mui/icons-material/Google';
import React, { useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Title2 } from '../../../shared-components/Title2';
import '../signup/style.css';
import { useNavigate } from 'react-router-dom';

const StyledDiv = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  minHeight: `calc(100vh - ${theme.spacing(3)})`,
}));

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleBack = () => {
    navigate('/onboarding/introduction');
  };
  return (
    <Paper>
      <StyledDiv>
        <Stack direction='row' alignItems='center' spacing={15} sx={{ mb: 8 }}>
          <IconButton aria-label='introduction' onClick={handleBack}>
            <ArrowBack />
          </IconButton>
          <Title2>Sign Up</Title2>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} direction='column'>
            <TextField label='Name' variant='outlined' required />
            <TextField label='Email' type='email' variant='outlined' required />
            <TextField
              label='Password'
              type={showPassword ? 'text' : 'password'}
              variant='outlined'
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={<Checkbox required />}
              label='By signing up, you agree to the Terms of Service and Privacy Policy'
            />
            <Button
              type='submit'
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
              startIcon={<GoogleIcon />}
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
        </form>
      </StyledDiv>
    </Paper>
  );
};
