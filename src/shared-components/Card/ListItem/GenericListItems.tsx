import {
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';

interface GenericListItemsProps {
  title: string;
  description?: string;
  secondaryAction?: React.ReactNode;
}

export const GenericListItems = ({
  title,
  description,
  secondaryAction,
}: GenericListItemsProps) => {
  return (
    <List>
      <ListItem>
        <ListItemText primary={title} secondary={description || undefined} />
        {secondaryAction && (
          <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>
        )}
      </ListItem>
    </List>
  );
};
