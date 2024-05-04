import { styled, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import { colors } from 'src/styles/colors';
import React from 'react';

const StyledDiv = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flex: 'end',
  flexDirection: 'column',
  margin: '80px 30px 0 30px',
}));

const StyledDivPrice = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flex: 'end',
  flexDirection: 'column',
  gap: '12px',
}));

export const PriceSection = () => {
  const [amount, setAmount] = React.useState('');

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  return (
    <StyledDiv>
      <StyledDivPrice>
        <Typography
          sx={{ color: colors.light[80], fontWeight: '600', opacity: '64%' }}
        >
          How much?
        </Typography>
        <FormControl sx={{ fontSize: '1000px' }} variant='standard'>
          <Input
            value={amount}
            onChange={handleAmountChange}
            disableUnderline
            sx={{
              fontSize: '50px',
              fontWeight: 'bold',
              color: colors.light[100],
            }}
            id='standard-adornment-amount'
            startAdornment={
              <InputAdornment position='start'>
                <Typography
                  sx={{
                    fontSize: '50px',
                    color: colors.light[100],
                    fontWeight: 'bold',
                  }}
                >
                  $
                </Typography>
              </InputAdornment>
            }
          />
        </FormControl>
      </StyledDivPrice>
    </StyledDiv>
  );
};
