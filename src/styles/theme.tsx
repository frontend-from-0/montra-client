import { createTheme } from '@mui/material/styles';
import { colors } from './colors';

export const theme = createTheme({
  typography: {
    h2: {
      lineHeight: '34px',
      fontSize: '32px',
      fontWeight: 700,
    },
  },
  palette: {
    primary: {
      main: colors.violet[100],
      contrastText: colors.light[80],
    },
    secondary: {
      main: colors.violet[20],
      contrastText: colors.violet[100],
    },
    error: { main: colors.red[100], contrastText: colors.light[80] },
    success: {
      main: colors.green[100],
      contrastText: colors.light[80],
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 4,
});
