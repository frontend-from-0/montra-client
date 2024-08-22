import { Avatar, Box, Stack } from '@mui/material';
import { theme } from 'src/styles/theme';
import { colors } from 'src/styles/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Regular3 } from '../../Typography/Regular3/index';

interface HomeNavigationProps {
  month: string;
  personImage: string;
}

export const HomeNavigation = ({ month, personImage }: HomeNavigationProps) => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ padding: `${theme.spacing(2)} ${theme.spacing(4)}` }}
    >
      <Box
        sx={{
          border: `${theme.spacing(0.5)} solid ${colors.violet[100]}`,
          borderRadius: theme.shape.borderRadius * 2,
          padding: theme.spacing(0.5),
        }}
      >
        <Avatar alt='Profile picture' src={personImage} />
      </Box>

      <Stack direction='row' alignItems='center'>
        <ExpandMoreIcon />
        <Regular3 color={colors.dark[100]}>{month}</Regular3>
      </Stack>

      <NotificationsIcon style={{ color: colors.violet[100] }} />
    </Stack>
  );
};
