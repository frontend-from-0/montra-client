import { Stack } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Title3 } from '../../Typography/Title3/index';
import { colors } from 'src/styles/colors';
import { theme } from 'src/styles/theme';

interface FullTypeNavigationProps {
  title: string;
}

export const FullTypeNavigation = ({ title }: FullTypeNavigationProps) => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      padding={theme.spacing(4)}
    >
      <KeyboardBackspaceIcon />

      <Title3 color={colors.dark[100]}>{title}</Title3>

      <MoreHorizIcon />
    </Stack>
  );
};
