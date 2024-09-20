import {
  Box,
  ListItem,
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { colors } from 'src/styles/colors';
import { theme } from 'src/styles/theme';

export const ListItemSetting = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <ListItemButton alignItems='center' sx={{ padding: theme.spacing(3) }}>
      <ListItemText
        primary={
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}
          >
            <Typography>{title}</Typography>
            <Typography color={colors.dark[25]}>{description}</Typography>
          </Box>
        }
      />

      <ChevronRightIcon sx={{ color: colors.violet[100] }} />
    </ListItemButton>
  );
};
