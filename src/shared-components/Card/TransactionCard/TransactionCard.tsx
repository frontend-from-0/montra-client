import { Box, Stack, Typography } from '@mui/material';
import { Regular2 } from '../../Typography/Regular2';
import { ReactNode } from 'react';
import { theme } from 'src/styles/theme';

interface TransactionCardProps {
  bgcolor: string;
  icon: ReactNode;
  spendingtype: string;
  content: string;
  amount: string;
  time: string;
  spendingtypecolor: string;
  contentcolor: string;
  timecolor: string;
  amountcolor: string;
}

export const truncateText = (text: string, maxLength: number = 16) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '..' : text;
};

export const TransactionCard: React.FC<TransactionCardProps> = ({
  bgcolor,
  icon,
  spendingtype,
  content,
  amount,
  time,
  spendingtypecolor,
  contentcolor,
  timecolor,
  amountcolor,
}) => {
  return (
    <Stack direction='row' padding={theme.spacing(5)}>
      <Box
        width='60px'
        height='60px'
        bgcolor={bgcolor}
        borderRadius={theme.shape.borderRadius}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        {icon}
      </Box>

      <Stack
        direction='row'
        flexGrow={1}
        justifyContent='space-between'
        sx={{ padding: `0px ${theme.spacing(2)}` }}
      >
        <Stack
          direction='column'
          justifyContent='space-between'
          padding={theme.spacing(1)}
        >
          <Regular2 color={spendingtypecolor}>{spendingtype}</Regular2>
          <Typography fontSize='small' color={contentcolor}>
            {truncateText(content)}
          </Typography>
        </Stack>

        <Stack
          direction='column'
          justifyContent='space-between'
          padding={theme.spacing(1)}
          alignItems='end'
        >
          <Regular2 color={amountcolor}>{amount}</Regular2>

          <Typography fontSize='small' fontWeight='500' color={timecolor}>
            {time}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
