import './App.css';
import { AppRouter } from './AppRouter';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './styles/theme';
import Container from '@mui/material/Container/Container';
import { Provider } from 'react-redux';
import { store } from './store/store';

export const App = () => {
  return (
    <Container component='main' maxWidth='xs'>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </ThemeProvider>
    </Container>
  );
};
