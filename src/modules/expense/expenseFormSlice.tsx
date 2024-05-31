// src/features/expenseForm/expenseFormSlice.js
import { createSlice } from '@reduxjs/toolkit';
import dayjs, { Dayjs } from 'dayjs';

export const expenseFormSlice = createSlice({
  name: 'newExpense',
  initialState: {
    category: [],
    description: '',
    wallet: '',
    frequency: '',
    endAfter: '',
    date: dayjs(),
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
    selectedWallet: (state, action) => {
      state.wallet = action.payload;
    },
    selectedFrequency: (state, action) => {
      state.frequency = action.payload;
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
  setDescription,
  selectedWallet,
  selectedFrequency,
  setSelectedEndAfter,
  setDate,
} = expenseFormSlice.actions;

export default expenseFormSlice.reducer;
