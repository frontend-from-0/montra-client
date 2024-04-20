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
import Stack from '@mui/material/Stack';
import CameraAltRoundedIcon from '@mui/icons-material/CameraAltRounded';
import ImageRoundedIcon from '@mui/icons-material/ImageRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import { Typography, useTheme } from '@mui/material';

const StyledForm = styled(`form`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: theme.spacing(2),
  padding: `${theme.spacing(3)} ${theme.spacing(2)} ${theme.spacing(2)}`,
}));

const StyledAttachmentArea = styled(Stack)({
  backgroundColor: colors.light[60],
  borderRadius: `16px 16px 0 0`,
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

export const Form = () => {
  const theme = useTheme();
  const [category, setCategory] = React.useState<string[]>([]);
  const [textValue, setTextValue] = React.useState<string>('');
  const [selectedWallet, setSelectedWallet] = React.useState<string>('');
  const [showAttachmentComponent, setShowAttachmentComponent] =
    React.useState(false);
  const [showContinueButton, setShowContinueButton] = React.useState(false);

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
    <StyledForm>
      <FormControl fullWidth>
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
      </FormControl>

      <TextField
        label='Description'
        value={textValue}
        onChange={handleChangeText}
        variant='outlined'
      />
      <FormControl>
        <InputLabel id='select-option'>Wallet</InputLabel>
        <Select
          labelId='select-option'
          id='simple-select-option'
          value={selectedWallet}
          onChange={handleChangeOption}
          input={<OutlinedInput id='select-single-option' label='Option' />}
        >
          <MenuItem value='Paypal'>Paypal</MenuItem>
          <MenuItem value='Google Pay'>Google Pay</MenuItem>
          <MenuItem value='Apple Pay'>Apple Pay</MenuItem>
        </Select>
      </FormControl>
      <Button
        onClick={() => setShowAttachmentComponent(!showAttachmentComponent)}
        component='label'
        sx={{
          backgroundColor: colors.light[100],
          border: `1px dashed ${colors.dark[25]}`,
          color: colors.dark[50],
        }}
      >
        <AttachFileIcon sx={{ marginRight: '10px' }}></AttachFileIcon>
        Add attachment
        {/* <input type='' hidden /> */}
      </Button>
      {showContinueButton && <Button>Continue</Button>}
      {showAttachmentComponent && (
        <StyledAttachmentArea
          direction='row'
          spacing={2}
          padding={3}
          justifyContent='space-evenly'
        >
          <Button
            onClick={() => {
              setShowContinueButton(!showContinueButton);
              setShowAttachmentComponent(false);
            }}
            sx={{
              padding: theme.spacing(2),
              boxShadow: 'none',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.violet[20],
              textTransform: 'none',
            }}
          >
            <CameraAltRoundedIcon sx={{ color: colors.violet[100] }} />
            <Typography sx={{ color: colors.violet[100] }}>Camera</Typography>
          </Button>
          <Button
            sx={{
              padding: theme.spacing(2),
              boxShadow: 'none',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.violet[20],
              textTransform: 'none',
            }}
          >
            <ImageRoundedIcon sx={{ color: colors.violet[100] }} />
            <Typography sx={{ color: colors.violet[100] }}>Image</Typography>
          </Button>
          <Button
            sx={{
              padding: theme.spacing(2),
              boxShadow: 'none',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.violet[20],
              textTransform: 'none',
            }}
          >
            <InsertDriveFileRoundedIcon sx={{ color: colors.violet[100] }} />
            <Typography sx={{ color: colors.violet[100] }}>Document</Typography>
          </Button>
        </StyledAttachmentArea>
      )}
    </StyledForm>
  );
};
