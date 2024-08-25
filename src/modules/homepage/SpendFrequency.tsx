import { Box, Stack } from '@mui/material';
import { ReactComponent as Graphic } from '../../assets/illustrations/graphic.svg';
import { TitleOnly } from '../../shared-components/Bars/TitleOnly';
import { theme } from 'src/styles/theme';

export const SpendFrequency = () => {
  return (
    <Stack marginTop={theme.spacing(4)}>
      <TitleOnly content='Spend Frequency' />

      <Box maxHeight='185.5px'>
        <Graphic width='100%' />
      </Box>
    </Stack>
  );
};
