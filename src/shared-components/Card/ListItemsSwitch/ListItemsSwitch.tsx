import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
} from '@mui/material';

export const ListItemsSwitch = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <List>
      <ListItem>
        <ListItemText primary={title} secondary={description}></ListItemText>
        <ListItemSecondaryAction>
          <Switch />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
