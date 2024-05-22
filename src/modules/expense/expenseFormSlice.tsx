// src/features/expenseForm/expenseFormSlice.js
import { createSlice } from '@reduxjs/toolkit';
import dayjs, { Dayjs } from 'dayjs';

export const expenseFormSlice = createSlice({
  name: 'newExpense',
  initialState: {
    category: [],
    textValue: '',
    selectedWallet: '',
    selectedFrequency: '',
    endAfter: '',
    date: dayjs(),
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
    frequency: (state, action) => {
      state.selectedFrequency = action.payload;
    },
    setSelectedEndAfter: (state, action) => {
      state.endAfter = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const {
  setCategory,
  setTextValue,
  setSelectedWallet,
  frequency,
  setSelectedEndAfter,
  setDate,
} = expenseFormSlice.actions;

export default expenseFormSlice.reducer;
