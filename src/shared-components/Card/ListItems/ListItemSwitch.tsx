import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
} from '@mui/material';

export const ListItemSwitch = ({
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
    <ListItem>
      <ListItemText primary={title} secondary={description} />
      <ListItemSecondaryAction>
        <Switch checked={isOn} onChange={onToggle} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};
