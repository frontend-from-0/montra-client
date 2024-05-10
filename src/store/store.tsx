// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import expenseFormReducer from '../modules/expense/expenseFormSlice';
import dayjs, { Dayjs } from 'dayjs';

interface RootState {
  expenseForm: {
    category: string[];
    textValue: string;
    selectedWallet: string;
    showAttachmentComponent: boolean;
    showContinueButton: boolean;
    switchChecked: boolean;
    toggleContinueButton: boolean;
    selectedFrequency: string;
    selectedEndAfter: string;
    showPopup: boolean;
    showRepeatDetails: boolean;
    date: Dayjs | null;
    showSummarizeSection: boolean;
    repeatSectionContinueButton: boolean;
  };
}

export const store = configureStore({
  reducer: {
    expenseForm: expenseFormReducer,
  },
});

export type { RootState };
