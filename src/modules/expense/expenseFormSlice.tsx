// src/features/expenseForm/expenseFormSlice.js
import { createSlice } from '@reduxjs/toolkit';
import dayjs, { Dayjs } from 'dayjs';

export const expenseFormSlice = createSlice({
  name: 'expenseForm',
  initialState: {
    category: [],
    textValue: '',
    selectedWallet: '',
    showAttachmentComponent: false,
    showContinueButton: false,
    switchChecked: false,
    toggleContinueButton: false,
    selectedFrequency: '',
    selectedEndAfter: '',
    showPopup: false,
    showRepeatDetails: false,
    date: dayjs('2022-04-17'),
    showSummarizeSection: false,
    repeatSectionContinueButton: false,
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setTextValue: (state, action) => {
      state.textValue = action.payload;
    },
    setSelectedWallet: (state, action) => {
      state.selectedWallet = action.payload;
    },
    setShowAttachmentComponent: (state, action) => {
      state.showAttachmentComponent = action.payload;
    },
    setShowContinueButton: (state, action) => {
      state.showContinueButton = action.payload;
    },
    setSwitchChecked: (state, action) => {
      state.switchChecked = action.payload;
    },
    setToggleContinueButton: (state, action) => {
      state.toggleContinueButton = action.payload;
    },
    setSelectedFrequency: (state, action) => {
      state.selectedFrequency = action.payload;
    },
    setSelectedEndAfter: (state, action) => {
      state.selectedEndAfter = action.payload;
    },
    setShowPopup: (state, action) => {
      state.showPopup = action.payload;
    },
    setShowRepeatDetails: (state, action) => {
      state.showRepeatDetails = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setShowSummarizeSection: (state, action) => {
      state.showSummarizeSection = action.payload;
    },
    setRepeatSectionContinueButton: (state, action) => {
      state.repeatSectionContinueButton = action.payload;
    },
  },
});

export const {
  setCategory,
  setTextValue,
  setSelectedWallet,
  setShowAttachmentComponent,
  setShowContinueButton,
  setSwitchChecked,
  setToggleContinueButton,
  setSelectedFrequency,
  setSelectedEndAfter,
  setShowPopup,
  setShowRepeatDetails,
  setDate,
  setShowSummarizeSection,
  setRepeatSectionContinueButton,
} = expenseFormSlice.actions;

export default expenseFormSlice.reducer;
