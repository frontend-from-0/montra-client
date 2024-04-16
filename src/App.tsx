import './App.css';
import { AppRouter } from './AppRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import Container from '@mui/material/Container/Container';

export const App = () => {
  return (
    <Container sx={{ width: '460px' }}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Container>
  );
};
