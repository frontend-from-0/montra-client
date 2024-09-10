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
  isOn,
  onToggle,
}: {
  title: string;
  description: string;
  isOn: boolean;
  onToggle: () => void;
}) => {
  return (
    <List>
      <ListItem>
        <ListItemText primary={title} secondary={description} />
        <ListItemSecondaryAction>
          <Switch checked={isOn} onChange={onToggle} />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
