import { Paper as MUIPaper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const Paper = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <MUIPaper square elevation={0} sx={{ padding: theme.spacing(2) }}>
      {children}
    </MUIPaper>
  );
};
