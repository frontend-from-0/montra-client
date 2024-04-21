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
import { AttachmentOptionsButtons } from '../../shared-components/Button';
import Switch from '@mui/material/Switch';
import { Typography } from '@mui/material';
import { theme } from 'src/styles/theme';
import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const StyledForm = styled(`form`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: theme.spacing(2),
  padding: `${theme.spacing(3)} ${theme.spacing(2)} ${theme.spacing(2)}`,
}));

const StyledDiv = styled(`div`)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

const StyledDivRepeatSection = styled(`div`)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const StyledAttachmentArea = styled(Stack)({
  backgroundColor: colors.light[60],
  borderRadius: `16px 16px 0 0`,
});

const StyledRepeatOptionsSection = styled(Stack)({
  backgroundColor: colors.light[60],
  borderRadius: `16px 16px 0 0`,
  padding: theme.spacing(2),
  gap: theme.spacing(2),
});

const popupStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: `16px 16px 16px 16px`,
};

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
  const [category, setCategory] = React.useState<string[]>([]);
  const [textValue, setTextValue] = React.useState<string>('');
  const [selectedWallet, setSelectedWallet] = React.useState<string>('');
  const [showAttachmentComponent, setShowAttachmentComponent] =
    React.useState(false);
  const [showContinueButton, setShowContinueButton] = React.useState(false);
  const [switchChecked, setSwitchChecked] = React.useState(false);
  const [toggleContinueButton, setToggleContinueButton] = React.useState(false);
  const [selectedFrequency, setSelectedFrequency] = React.useState<string>('');
  const [showPopup, setShowPopup] = React.useState(false);

  const handlePopupOpen = () => setShowPopup(true);
  const handlePopupClose = () => setShowPopup(false);

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

  const handleSwitchChecked = () => {
    setSwitchChecked(!switchChecked);
  };

  const handleContinueButton = () => {
    setToggleContinueButton(!toggleContinueButton);
    setShowContinueButton(!showContinueButton);
    setShowPopup(true);
  };

  const handleFrequency = (event: SelectChangeEvent) => {
    setSelectedFrequency(event.target.value as string);
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
      <StyledDiv>
        <StyledDivRepeatSection>
          <Typography
            variant='body1'
            fontWeight={500}
            sx={{ color: colors.dark[25] }}
          >
            Repeat
          </Typography>
          <Typography sx={{ color: colors.light[20] }}>
            {switchChecked
              ? 'Repeat transaction, set your own time'
              : 'Repeat transaction'}
          </Typography>
        </StyledDivRepeatSection>
        <Switch checked={switchChecked} onChange={handleSwitchChecked} />
      </StyledDiv>

      {showContinueButton && (
        <Button
          onClick={handleContinueButton}
          variant='contained'
          sx={{
            padding: theme.spacing(2),
            textTransform: 'none',
            fontSize: '16px',
          }}
        >
          Continue
        </Button>
      )}

      {showAttachmentComponent && (
        <StyledAttachmentArea
          direction='row'
          spacing={2}
          padding={3}
          justifyContent='space-evenly'
        >
          <AttachmentOptionsButtons
            icon={<CameraAltRoundedIcon sx={{ color: colors.violet[100] }} />}
            text='Camera'
            onClickHandler={() => {
              setShowContinueButton(!showContinueButton);
              setShowAttachmentComponent(false);
            }}
          />
          <AttachmentOptionsButtons
            icon={<ImageRoundedIcon sx={{ color: colors.violet[100] }} />}
            text='Image'
            onClickHandler={() => {
              setShowContinueButton(!showContinueButton);
              setShowAttachmentComponent(false);
            }}
          />
          <AttachmentOptionsButtons
            icon={
              <InsertDriveFileRoundedIcon sx={{ color: colors.violet[100] }} />
            }
            text='Document'
            onClickHandler={() => {
              setShowContinueButton(!showContinueButton);
              setShowAttachmentComponent(false);
            }}
          />
        </StyledAttachmentArea>
      )}
      {toggleContinueButton && !switchChecked && (
        <Modal
          open={showPopup}
          onClose={handlePopupClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={popupStyle}>
            <CheckCircleIcon
              fontSize='large'
              sx={{ margin: 'auto', color: colors.violet[80] }}
            />
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              Transaction has been succesfully added
            </Typography>
          </Box>
        </Modal>
      )}
      {toggleContinueButton && switchChecked && (
        <StyledRepeatOptionsSection>
          <FormControl>
            <InputLabel id='select-option'>Frequency</InputLabel>
            <Select
              labelId='select-frequency'
              id='simple-select-frequency'
              value={selectedWallet}
              onChange={handleChangeOption}
              input={
                <OutlinedInput id='select-single-frequency' label='frequency' />
              }
            >
              <MenuItem value='Daily'>Daily</MenuItem>
              <MenuItem value='Weekly'>Weekly</MenuItem>
              <MenuItem value='Monthly'>Monthly</MenuItem>
              <MenuItem value='Yearly'>Yearly</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id='select-end-after'>Wallet</InputLabel>
            <Select
              labelId='select-end-after'
              id='simple-select-end-after'
              value={selectedWallet}
              onChange={handleChangeOption}
              input={
                <OutlinedInput id='select-single-end-after' label='end-after' />
              }
            >
              <MenuItem value='Paypal'>Paypal</MenuItem>
              <MenuItem value='Google Pay'>Google Pay</MenuItem>
              <MenuItem value='Apple Pay'>Apple Pay</MenuItem>
            </Select>
          </FormControl>
          <Button
            //onClick={handleNextButton}
            variant='contained'
            sx={{
              padding: theme.spacing(2),
              textTransform: 'none',
              fontSize: '16px',
            }}
          >
            Next
          </Button>
        </StyledRepeatOptionsSection>
      )}
    </StyledForm>
  );
};
