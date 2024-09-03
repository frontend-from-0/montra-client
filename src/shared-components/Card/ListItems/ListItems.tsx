import {
  Box,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { colors } from 'src/styles/colors';
import { CheckBox } from '@mui/icons-material';

export const ListItems = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <List>
      <ListItem>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography>{title}</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography color={colors.dark[25]}>{description}</Typography>
            <ChevronRightIcon sx={{ color: colors.violet[100] }} />
          </Box>
        </Box>
      </ListItem>
    </List>
  );
};
