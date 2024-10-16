import { Button, Typography } from '@mui/material';
import { colors } from 'src/styles/colors';
import { theme } from 'src/styles/theme';

interface BtnTextProps {
  btnText: string;
}

export const Primary = ({ btnText }: BtnTextProps) => {
  return (
    <Button
      sx={{
        backgroundColor: colors.violet[100],
        margin: theme.spacing(5),
        borderRadius: '16px',
        padding: theme.spacing(3),
      }}
    >
      <Typography sx={{ color: colors.light[100] }}>{btnText}</Typography>
    </Button>
  );
};
