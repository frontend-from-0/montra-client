import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from '@mui/material';
import { colors } from 'src/styles/colors';

export const ListItemsTime = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
  return (
    <List>
      <ListItem>
        <ListItemText primary={title} secondary={description} />
        <ListItemSecondaryAction>
          <Typography color={colors.dark[25]}>{currentTime}</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
