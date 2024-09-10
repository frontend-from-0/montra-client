import {
  Checkbox,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const ListItemSelect = ({
  title,
  isSelected,
  setIsSelected,
}: {
  title: string;
  isSelected?: boolean;
  setIsSelected: (value: boolean) => void;
}) => {
  const handleSelectChange = () => {
    setIsSelected(!isSelected);
  };

  return (
    <List>
      <ListItem>
        <ListItemText primary={title} />
        <ListItemSecondaryAction>
          {isSelected ? (
            <Checkbox
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<CheckCircleIcon />}
              checked={isSelected}
              onChange={handleSelectChange}
            />
          ) : null}
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
};
