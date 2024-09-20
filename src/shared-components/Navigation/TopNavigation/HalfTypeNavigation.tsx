import { Box, Stack } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Title3 } from '../../Typography/Title3/index';
import { theme } from 'src/styles/theme';
import { useNavigate } from 'react-router-dom';

interface HalfTypeNavigationProps {
  title: string;
  color: string;
}

export const HalfTypeNavigation = ({
  title,
  color,
}: HalfTypeNavigationProps) => {
  const navigate = useNavigate();

  return (
    <Stack
      direction='row'
      alignItems='center'
      padding={theme.spacing(4)}
      color={color}
      justifyContent='space-between'
    >
      <KeyboardBackspaceIcon
        onClick={() => navigate(-1)}
        sx={{ cursor: 'pointer' }}
      />

      <Title3 color={color}>{title}</Title3>

      <Box></Box>
    </Stack>
  );
};
