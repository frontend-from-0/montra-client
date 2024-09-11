import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@mui/material';
import { colors } from 'src/styles/colors';
import { formatTime } from 'src/utils/timeUtils';

export const ListItemNotification = ({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string | Date;
}) => {
  const formattedTime = formatTime(time);
  return (
    <ListItem>
      <ListItemText primary={title} secondary={description || undefined} />
      <ListItemSecondaryAction>
        <Typography color={colors.dark[25]}>{formattedTime}</Typography>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
