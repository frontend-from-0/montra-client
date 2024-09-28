import {
  ListItemButton,
  ListItemSecondaryAction,
  ListItemText,
  Switch,
  Typography,
} from '@mui/material';
import { colors } from 'src/styles/colors';

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
    <ListItemButton>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            sx={{
              whiteSpace: 'normal',
              wordWrap: 'break-word',
              maxWidth: '25ch',
              color: colors.dark[25],
            }}
          >
            {description}
          </Typography>
        }
      />
      <ListItemSecondaryAction>
        <Switch checked={isOn} onChange={onToggle} />
      </ListItemSecondaryAction>
    </ListItemButton>
  );
};
