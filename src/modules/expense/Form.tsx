import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { styled, Theme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
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
import { theme } from 'src/styles/theme';
import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { Regular1 } from '../../shared-components/Regular1';
import { useSelector, useDispatch } from 'react-redux';
import {
  setCategory,
  setTextValue,
  setSelectedWallet,
  frequency,
  setSelectedEndAfter,
  setDate,
} from '../expense/expenseFormSlice';
import { Category } from 'src/types/Category';
import { PaymentFrequency } from 'src/types/PaymentFrequency';

interface RootState {
  newExpense: {
    category: Category[];
    textValue: string;
    selectedWallet: string;
    showAttachmentComponent: boolean;
    showContinueButton: boolean;
    switchChecked: boolean;
    toggleContinueButton: boolean;
    selectedFrequency: string;
    endAfter: string;
    showPopup: boolean;
    showRepeatDetails: boolean;
    date: Dayjs | null;
    showSummarizeSection: boolean;
    repeatSectionContinueButton: boolean;
  };
}

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
  padding: theme.spacing(1),
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

const StyledRepeatDetailsSection = styled(Stack)({
  backgroundColor: colors.light[60],
  borderRadius: `16px 16px 0 0`,
  padding: theme.spacing(2),
  gap: theme.spacing(2),
});

const SummarizeSection = styled(Stack)({
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
  borderRadius: `16px`,
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
  const {
    category,
    textValue,
    selectedWallet,
    selectedFrequency,
    endAfter,
    date,
  } = useSelector((state: RootState) => state.newExpense);

  const dispatch = useDispatch();

  const handlePopupOpen = () => setShowPopup(true);
  const handlePopupClose = () => setShowPopup(false);

  const handleChangeCategory = (event: SelectChangeEvent<typeof category>) => {
    const {
      target: { value },
    } = event;
    dispatch(setCategory(event.target.value as string[]));
  };

  const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTextValue(event.target.value));
  };

  const handleChangeWalletOption = (event: SelectChangeEvent) => {
    dispatch(setSelectedWallet(event.target.value as string));
  };

  const handleAttachmentComponent = () => {
    setShowAttachmentComponent(!showAttachmentComponent);
  };

  const handleSwitchChecked = () => {
    setSwitchChecked(!switchChecked);
  };

  const handleContinueButton = () => {
    setToggleContinueButton(!toggleContinueButton);
    setShowContinueButton(!showContinueButton);
    setShowPopup(true);
  };

  const handleChangeFrequency = (event: SelectChangeEvent) => {
    dispatch(frequency(event.target.value as string));
  };

  const handleChangeEndAfter = (event: SelectChangeEvent) => {
    dispatch(setSelectedEndAfter(event.target.value as string));
  };

  const handleFirstStepNextButton = () => {
    setToggleContinueButton(false);
    setShowRepeatDetails(true);
  };

  const handleSecondStepNextButton = () => {
    setShowRepeatDetails(false);
    setShowSummarizeSection(true);
  };

  const handleRepeatSectionContinueButton = () => {
    handlePopupOpen();
  };

  const handleEditButton = () => {
    setShowRepeatDetails(true);
    setShowSummarizeSection(false);
  };

  const [showContinueButton, setShowContinueButton] = useState(false);
  const [showAttachmentComponent, setShowAttachmentComponent] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [toggleContinueButton, setToggleContinueButton] = useState(false);
  const [showRepeatDetails, setShowRepeatDetails] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSummarizeSection, setShowSummarizeSection] = useState(false);
  const [repeatSectionContinueButton, setRepeatSectionContinueButton] =
    useState(false);

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
          {Object.values(Category).map((category) => (
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
          onChange={handleChangeWalletOption}
          input={<OutlinedInput id='select-single-option' label='Option' />}
        >
          <MenuItem value='Paypal'>Paypal</MenuItem>
          <MenuItem value='Google Pay'>Google Pay</MenuItem>
          <MenuItem value='Apple Pay'>Apple Pay</MenuItem>
        </Select>
      </FormControl>
      <Button
        onClick={handleAttachmentComponent}
        component='label'
        sx={{
          backgroundColor: colors.light[100],
          border: `1px dashed ${colors.dark[25]}`,
          color: colors.dark[50],
        }}
      >
        <AttachFileIcon sx={{ marginRight: '10px' }}></AttachFileIcon>
        Add attachment
      </Button>
      <StyledDiv>
        <StyledDivRepeatSection>
          <Regular1>Repeat</Regular1>
          <Regular1 sx={{ color: colors.light[20] }}>
            {switchChecked
              ? 'Repeat transaction, set your own time'
              : 'Repeat transaction'}
          </Regular1>
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
            <Regular1 id='modal-modal-description' sx={{ mt: 2 }}>
              Transaction has been succesfully added
            </Regular1>
          </Box>
        </Modal>
      )}
      {toggleContinueButton && switchChecked && (
        <StyledRepeatOptionsSection>
          <FormControl>
            <InputLabel id='select-frequency'>Frequency</InputLabel>
            <Select
              labelId='select-frequency'
              id='simple-select-frequency'
              value={selectedFrequency}
              onChange={handleChangeFrequency}
              input={
                <OutlinedInput id='select-single-frequency' label='frequency' />
              }
            >
              {Object.values(PaymentFrequency).map((frequency) => (
                <MenuItem key={frequency} value={frequency}>
                  {frequency}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id='select-end-after'>End After</InputLabel>
            <Select
              labelId='select-end-after'
              id='simple-select-end-after'
              value={endAfter}
              onChange={handleChangeEndAfter}
              input={
                <OutlinedInput id='select-single-end-after' label='end-after' />
              }
            >
              <MenuItem value='Date'>Date</MenuItem>
            </Select>
          </FormControl>
          <Button
            onClick={handleFirstStepNextButton}
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
      {showRepeatDetails && (
        <StyledRepeatDetailsSection>
          <Stack>
            <FormControl>
              <InputLabel id='select-frequency'>Frequency</InputLabel>
              <Select
                labelId='select-frequency'
                id='simple-select-frequency'
                value={selectedFrequency}
                onChange={handleChangeFrequency}
                input={
                  <OutlinedInput
                    id='select-single-frequency'
                    label='frequency'
                  />
                }
              >
                {Object.values(PaymentFrequency).map((frequency) => (
                  <MenuItem key={frequency} value={frequency}>
                    {frequency}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Stack>
          <Stack
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: theme.spacing(2),
            }}
          >
            <FormControl sx={{ width: '50%' }}>
              <InputLabel id='select-end-after'>End After</InputLabel>
              <Select
                labelId='select-end-after'
                id='simple-select-end-after'
                value={endAfter}
                onChange={handleChangeEndAfter}
                input={
                  <OutlinedInput
                    id='select-single-end-after'
                    label='end-after'
                  />
                }
              >
                <MenuItem value='Date'>Date</MenuItem>
              </Select>
            </FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: '50%' }}
                value={date}
                onChange={(newDate) => setDate(newDate)}
              />
            </LocalizationProvider>
          </Stack>
          <Button
            onClick={handleSecondStepNextButton}
            variant='contained'
            sx={{
              padding: theme.spacing(2),
              textTransform: 'none',
              fontSize: '16px',
            }}
          >
            Next
          </Button>
        </StyledRepeatDetailsSection>
      )}
      {showSummarizeSection && (
        <>
          <StyledDiv>
            <Stack>
              <Regular1 sx={{ color: colors.dark[25], fontWeight: '500' }}>
                Frequency
              </Regular1>
              <Regular1 sx={{ color: colors.light[20] }}>
                {selectedFrequency
                  ? `${selectedFrequency}`
                  : 'Frequency not selected'}
              </Regular1>
            </Stack>
            <Stack>
              <Regular1 sx={{ color: colors.dark[25] }}>End After</Regular1>
              <Regular1 sx={{ color: colors.light[20] }}>
                {date ? `${date.format('DD MMMM YYYY')}` : 'No date selected'}
              </Regular1>
            </Stack>
            <Button
              onClick={() => {
                handleEditButton();
              }}
              variant='contained'
              sx={{
                textTransform: 'none',
                fontSize: '16px',
                backgroundColor: colors.violet[20],
                color: colors.violet[100],
                boxShadow: 'none',
                borderRadius: '40px',
              }}
            >
              Edit
            </Button>
          </StyledDiv>
          <Button
            onClick={() => {
              handleRepeatSectionContinueButton();
              setRepeatSectionContinueButton(true);
            }}
            variant='contained'
            sx={{
              padding: theme.spacing(2),
              textTransform: 'none',
              fontSize: '16px',
            }}
          >
            Continue
          </Button>
        </>
      )}
      {repeatSectionContinueButton && (
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
            <Regular1 id='modal-modal-description' sx={{ mt: 2 }}>
              Transaction has been succesfully added
            </Regular1>
          </Box>
        </Modal>
      )}
    </StyledForm>
  );
};
