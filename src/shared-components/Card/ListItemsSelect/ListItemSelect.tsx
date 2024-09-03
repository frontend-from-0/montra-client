import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Checkbox,
} from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const ListItemSelect = ({ title }: { title: string }) => {
  return (
    <List>
      <ListItem>
        <ListItemText primary={title} />
        <ListItemSecondaryAction>
          <Checkbox
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon />}
          />
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
