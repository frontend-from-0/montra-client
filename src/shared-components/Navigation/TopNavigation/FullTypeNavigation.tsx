import { Box, Stack } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Title3 } from '../../Typography/Title3/index';
import { colors } from 'src/styles/colors';
import { theme } from 'src/styles/theme';

interface FullTypeNavigationProps {
  text: string;
}

export const FullTypeNavigation = ({ text }: FullTypeNavigationProps) => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      padding={theme.spacing(4)}
    >
      <Box>
        <KeyboardBackspaceIcon />
      </Box>
      <Box>
        <Title3 color={colors.dark[100]}>{text}</Title3>
      </Box>
      <Box>
        <MoreHorizIcon />
      </Box>
    </Stack>
  );
};
