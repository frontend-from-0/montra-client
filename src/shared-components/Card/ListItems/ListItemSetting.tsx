import { ListItem, ListItemSecondaryAction, ListItemText } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { colors } from 'src/styles/colors';

export const ListItemSetting = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <ListItem>
      <ListItemText primary={title} secondary={description} />
      <ListItemSecondaryAction>
        <ChevronRightIcon sx={{ color: colors.violet[100] }} />
      </ListItemSecondaryAction>
    </ListItem>
  );
};
