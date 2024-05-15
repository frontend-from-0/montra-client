import Button from '@mui/material/Button';
import { Typography, useTheme } from '@mui/material';
import { colors } from 'src/styles/colors';

export const AttachmentOptionsButtons = ({
  icon,
  text,
  onClickHandler,
}: {
  icon: any;
  text: any;
  onClickHandler: any;
}) => {
  const theme = useTheme();

  return (
    <Button
      onClick={onClickHandler}
      sx={{
        padding: theme.spacing(2),
        boxShadow: 'none',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.violet[20],
        textTransform: 'none',
      }}
    >
      {icon}
      <Typography sx={{ color: colors.violet[100] }}>{text}</Typography>
    </Button>
  );
};
