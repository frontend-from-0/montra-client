import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled, Theme } from '@mui/material/styles';

const StyledDiv = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  width: '100%',
}));

export const Form = () => {
  const [category, setCategory] = React.useState('');

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <StyledDiv sx={{ minWidth: 120 }}>
      <FormControl sx={{ width: '375px', margin: ' 20px auto' }}>
        <InputLabel id='select-category'>Category</InputLabel>
        <Select
          labelId='select-category'
          id='simple-select-category'
          value={category}
          label='Age'
          onChange={handleChangeCategory}
        >
          <MenuItem>Housing</MenuItem>
          <MenuItem>Utilities</MenuItem>
          <MenuItem>Food</MenuItem>
          <MenuItem>Transpotarion</MenuItem>
          <MenuItem>Healthcare</MenuItem>
          <MenuItem>Insurance</MenuItem>
          <MenuItem>Personal</MenuItem>
          <MenuItem>Spending</MenuItem>
          <MenuItem>Savings</MenuItem>
          <MenuItem>Edication</MenuItem>
          <MenuItem>Donation</MenuItem>
          <MenuItem>Gifts</MenuItem>
          <MenuItem>Childcare</MenuItem>
          <MenuItem>Travel</MenuItem>
          <MenuItem>Subscription</MenuItem>
          <MenuItem>Loan</MenuItem>
        </Select>
      </FormControl>
    </StyledDiv>
  );
};
