import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@mui/material';
import { colors } from 'src/styles/colors';
import { formatTime } from 'src/utils/timeUtils';

export const ListItemsNotification = ({
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
    <List>
      <ListItem>
        <ListItemText primary={title} secondary={description || undefined} />
        <ListItemSecondaryAction>
          <Typography color={colors.dark[25]}>{formattedTime}</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
