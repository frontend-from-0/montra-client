import { Box, Stack } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Title3 } from '../../Typography/Title3/index';
import { theme } from 'src/styles/theme';

interface HalfTypeNavigationProps {
  title: string;
  color: string;
}

export const HalfTypeNavigation = ({
  title,
  color,
}: HalfTypeNavigationProps) => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      padding={theme.spacing(4)}
      color={color}
    >
      <Box>
        <KeyboardBackspaceIcon />
      </Box>
      <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
        <Title3 color={color}>{title}</Title3>
      </Box>
    </Stack>
  );
};
