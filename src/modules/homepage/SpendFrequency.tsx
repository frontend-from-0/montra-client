import { Box, Stack } from '@mui/material';
import { ReactComponent as Graphic } from '../../assets/illustrations/graphic.svg';
import { theme } from 'src/styles/theme';
import { colors } from 'src/styles/colors';
import { Title3 } from '../../shared-components/Typography/Title3';

export const SpendFrequency = () => {
  return (
    <Stack>
      <Box
        padding={theme.spacing(2)}
        display='flex'
        justifyContent='flex-start'
      >
        <Title3 color={colors.dark[100]} justify='flex-start'>
          Spend Frequency
        </Title3>
      </Box>

      <Box maxHeight='185.5px'>
        <Graphic width='100%' />
      </Box>
    </Stack>
  );
};
