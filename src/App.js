import { ThemeProvider } from "@mui/material/styles";
import { AppRouter } from "./AppRouter";
import { theme } from "./styles/theme";
import { Container } from "@mui/material";

export const App = () => {
  return (
    <Container maxWidth="sm">
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Container>
  );
};
