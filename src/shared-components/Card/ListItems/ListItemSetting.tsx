import {
  Box,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { colors } from 'src/styles/colors';
import { theme } from 'src/styles/theme';

export const ListItemSetting = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Box display='flex' flexDirection='column' gap={theme.spacing(2)}>
      <List>
        <ListItem>
          <ListItemText primary={title} secondary={description} />
          <ListItemSecondaryAction>
            <ChevronRightIcon sx={{ color: colors.violet[100] }} />
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </Box>
  );
};
