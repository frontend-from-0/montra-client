import { styled, Theme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import { colors } from 'src/styles/colors';
import React from 'react';
import { Title1 } from '../../shared-components/Typography/Title1';

const StyledDiv = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flex: 'end',
  flexDirection: 'column',
  margin: `${theme.spacing(10)} ${theme.spacing(4)} 0 ${theme.spacing(4)}`,
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
        <Title1
          sx={{ color: colors.light[40], fontWeight: '400', opacity: '64%' }}
        >
          How much?
        </Title1>
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
                <Title1
                  sx={{
                    fontSize: '50px',
                    color: colors.light[100],
                    fontWeight: 'bold',
                  }}
                >
                  $
                </Title1>
              </InputAdornment>
            }
          />
        </FormControl>
      </StyledDivPrice>
    </StyledDiv>
  );
};
