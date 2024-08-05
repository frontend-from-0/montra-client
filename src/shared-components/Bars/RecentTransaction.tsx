import { Stack, Typography } from '@mui/material';
import { Title3 } from '../../shared-components/Typography/Title3';
import { colors } from 'src/styles/colors';

export const RecentTransaction = () => {
  return (
    <Stack
      display='flex'
      flexDirection='row'
      alignItems='center'
      justifyContent='space-between'
      whiteSpace='nowrap'
      margin='10px'
    >
      <Title3 color={colors.dark[100]} justify='flex-start'>
        Recent Transaction
      </Title3>
      <Typography
        borderRadius='40px'
        padding='8px 16px'
        bgcolor='#EEE5FF'
        color='#7F3DFF'
        fontSize='14px'
      >
        See All
      </Typography>
    </Stack>
  );
};
