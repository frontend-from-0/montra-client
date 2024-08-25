import { Box } from '@mui/material';
import { Title3 } from '../Typography/Title3';
import { colors } from 'src/styles/colors';
import { theme } from 'src/styles/theme';

interface TitleOnlyProps {
  content: string;
}

export const TitleOnly: React.FC<TitleOnlyProps> = ({ content }) => {
  return (
    <Box padding={theme.spacing(2)} textAlign='start'>
      <Title3 color={colors.dark[100]}>{content}</Title3>
    </Box>
  );
};
