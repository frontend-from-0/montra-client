import './App.css';
import { AppRouter } from './AppRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

export const App = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </div>
  );
};
