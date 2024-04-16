import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled, Theme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { categories } from './ExpenseCategories';
import { colors } from 'src/styles/colors';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const StyledDiv = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  width: '100%',
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export const Form = () => {
  //const theme = useTheme();
  const [category, setCategory] = React.useState<string[]>([]);
  const [textValue, setTextValue] = React.useState<string>('');
  const [selectedWallet, setSelectedWallet] = React.useState<string>('');
  const [showAttachmentComponent, setShowAttachmentComponent] =
    React.useState(false);

  const handleChangeCategory = (event: SelectChangeEvent<typeof category>) => {
    const {
      target: { value },
    } = event;
    setCategory(typeof value === 'string' ? value.split(',') : value);
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value);
  };

  const handleChangeOption = (event: SelectChangeEvent) => {
    setSelectedWallet(event.target.value as string);
  };

  return (
    <StyledDiv
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      <FormControl sx={{ width: '375px', margin: ' 20px auto' }}>
        <InputLabel id='select-category'>Category</InputLabel>
        <Select
          labelId='select-category'
          id='simple-select-category'
          multiple
          value={category}
          label='Category'
          onChange={handleChangeCategory}
          input={<OutlinedInput id='select-multiple-chip' label='Category' />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip
                  key={value}
                  label={value}
                  sx={{
                    backgroundColor: colors.light[60],
                    border: '1px solid ' + colors.light[80],
                  }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label='Description'
          value={textValue}
          onChange={handleChangeText}
          variant='outlined'
          sx={{ marginTop: '20px' }}
        />
        <FormControl sx={{ marginTop: '20px' }}>
          <InputLabel id='select-option'>Wallet</InputLabel>
          <Select
            labelId='select-option'
            id='simple-select-option'
            value={selectedWallet}
            onChange={handleChangeOption}
            input={<OutlinedInput id='select-single-option' label='Option' />}
          >
            <MenuItem value='1'>1</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='3'>3</MenuItem>
          </Select>
          <Button
            onClick={() => setShowAttachmentComponent}
            component='label'
            sx={{
              backgroundColor: 'white',
              border: '1px dashed gray',
              height: '56px',
              marginTop: '20px',
              color: colors.dark[50],
            }}
          >
            <AttachFileIcon sx={{ marginRight: '10px' }}></AttachFileIcon>
            Add attachment
            <input type='file' hidden />
          </Button>
        </FormControl>
      </FormControl>
    </StyledDiv>
  );
};
