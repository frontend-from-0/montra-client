import { ThemeProvider } from "@mui/material";
import "./App.css";
import { AppRouter } from "./AppRouter";
import theme from "./shared-components/theme"

export const App = () => {
  return (<div className="App">
    <ThemeProvider theme={theme}>
      
      <AppRouter />
      
      </ThemeProvider>
      </div>
  );
};
