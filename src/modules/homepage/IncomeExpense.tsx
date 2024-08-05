import { Box, Stack } from '@mui/material';
import { ReactNode } from 'react';
import { theme } from 'src/styles/theme';
import { colors } from 'src/styles/colors';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Regular3 } from '../../shared-components/Typography/Regular3';

interface IncomeExpenseCardProps {
  children: ReactNode;
  bgcolor: string;
  color: string;
  content: string;
  amount: string;
}

export const IncomeExpenseCard: React.FC<IncomeExpenseCardProps> = ({
  children,
  bgcolor,
  color,
  content,
  amount,
}) => {
  return (
    <Box
      borderRadius={theme.shape.borderRadius * 7}
      bgcolor={bgcolor}
      display='inline-flex'
      flexDirection='row'
      alignItems='center'
      gap='10px'
      padding='10px 20px'
    >
      <Stack
        borderRadius={theme.shape.borderRadius * 3}
        bgcolor={colors.light[100]}
        color={color}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        padding='0px 16px'
        gap='5px'
      >
        {children}
        <CameraAltIcon />
      </Stack>
      <Box color={colors.light[100]}>
        <Regular3 style={{ textAlign: 'left' }}>{content}</Regular3>
        <Regular3
          style={{ fontSize: '22px', fontWeight: '600', textAlign: 'left' }}
        >
          {amount}
        </Regular3>
      </Box>
    </Box>
  );
};
