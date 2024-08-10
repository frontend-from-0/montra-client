import { Box, Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';
import { theme } from 'src/styles/theme';
import { colors } from 'src/styles/colors';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Regular3 } from '../../shared-components/Typography/Regular3';
import { TransactionType } from 'src/types/Category';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

interface IncomeExpenseCardProps {
  transactionType: TransactionType;
  content: string;
  amount: string;
}

export const IncomeExpenseCard: React.FC<IncomeExpenseCardProps> = ({
  transactionType,
  content,
  amount,
}) => {
  const isIncome = transactionType === TransactionType.income;
  const icon = isIncome ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />;
  const bgcolor = isIncome ? colors.green[100] : colors.red[100];
  const color = isIncome ? colors.green[100] : colors.red[100];

  return (
    <Box
      sx={{
        borderRadius: theme.shape.borderRadius * 1.5,
        padding: `${theme.spacing(2)} ${theme.spacing(5)}`,
      }}
      bgcolor={bgcolor}
      display='inline-flex'
      flexDirection='row'
      alignItems='center'
      gap={theme.spacing(3)}
    >
      <Stack
        sx={{
          padding: `${theme.spacing(0)} ${theme.spacing(4)}`,
          borderRadius: theme.shape.borderRadius * 1,
        }}
        bgcolor={colors.light[100]}
        color={color}
        direction='column'
        alignItems='center'
        justifyContent='center'
        gap={theme.spacing(1)}
      >
        {icon}
        <CameraAltIcon />
      </Stack>
      <Box textAlign='left'>
        <Regular3 color={colors.light[100]}>{content}</Regular3>

        <Typography
          style={{
            fontSize: '22px',
            fontWeight: '600',
            color: colors.light[100],
          }}
        >
          {amount}
        </Typography>
      </Box>
    </Box>
  );
};
