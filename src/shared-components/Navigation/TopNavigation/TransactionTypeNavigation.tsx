import { Stack, Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { theme } from 'src/styles/theme';
import { colors } from 'src/styles/colors';

interface TransactionTypeNavigationProps {
  month: string;
}

export const TransactionTypeNavigation = ({
  month,
}: TransactionTypeNavigationProps) => {
  return (
    <Stack direction='row' justifyContent='space-between'>
      <Stack
        direction='row'
        borderRadius={theme.shape.borderRadius}
        border={`${theme.spacing(0.25)} solid ${colors.light[60]}`}
        padding={`${theme.spacing(2)} ${theme.spacing(4)} ${theme.spacing(2)} ${theme.spacing(2)}`}
      >
        <ExpandMoreIcon sx={{ color: colors.violet[100] }} />
        <Typography fontSize={theme.spacing(3.5)}>{month}</Typography>
      </Stack>

      <FilterListIcon
        sx={{
          padding: theme.spacing(1),
          border: `${theme.spacing(0.25)} solid ${colors.light[60]}`,
          borderRadius: theme.shape.borderRadius * 2,
        }}
      />
    </Stack>
  );
};
