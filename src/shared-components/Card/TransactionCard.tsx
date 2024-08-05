import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface TransactionCardProps {
  bgcolor: string;
  children: ReactNode;
  spendingtype: string;
  content: string;
  amount: string;
  time: string;
  spendingtypecolor: string;
  contentcolor: string;
  timecolor: string;
  amountcolor: string;
}

const truncateText = (text: string, maxLength: number = 16) => {
  return text.length > maxLength ? text.slice(0, maxLength) + '..' : text;
};

export const TransactionCard: React.FC<TransactionCardProps> = ({
  bgcolor,
  children,
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
    <Box display='flex' flexDirection='row' padding='20px' width='375px'>
      <Box
        width='60px'
        height='60px'
        bgcolor={bgcolor}
        borderRadius='16px'
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        {children}
      </Box>
      <Box
        display='flex'
        flexDirection='row'
        flexGrow={1}
        justifyContent='space-between'
        padding='0px 9px'
      >
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          padding='3px'
        >
          <Typography fontSize='16px' color={spendingtypecolor}>
            {spendingtype}
          </Typography>
          <Typography fontSize='13px' color={contentcolor}>
            {truncateText(content)}
          </Typography>
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          padding='3px'
          alignItems='end'
        >
          <Typography fontSize='16px' fontWeight='600' color={amountcolor}>
            {amount}
          </Typography>
          <Typography fontSize='13px' fontWeight='500' color={timecolor}>
            {time}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
