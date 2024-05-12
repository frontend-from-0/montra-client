import { configureStore } from '@reduxjs/toolkit';
import expenseFormReducer from '../modules/expense/expenseFormSlice';

export const store = configureStore({
  reducer: {
    newExpense: expenseFormReducer,
  },
});
