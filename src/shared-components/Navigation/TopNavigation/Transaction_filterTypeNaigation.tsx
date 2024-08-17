import { Badge, Stack, styled, Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { theme } from 'src/styles/theme';
import { colors } from 'src/styles/colors';

interface Transaction_filterTypeNavigationProps {
  month: string;
  badgeContent: number;
}

const CustomBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: colors.violet[100],
    color: colors.light[100],
    borderRadius: '50%',
    right: theme.spacing(3),
    top: theme.spacing(3),
    padding: theme.spacing(2),
  },
}));

export const Transaction_filterTypeNavigation = ({
  month,
  badgeContent,
}: Transaction_filterTypeNavigationProps) => {
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
      <CustomBadge badgeContent={badgeContent} overlap='circular'>
        <FilterListIcon
          sx={{
            padding: theme.spacing(1),
            border: `${theme.spacing(0.25)} solid ${colors.light[60]}`,
            borderRadius: theme.shape.borderRadius * 2,
            width: theme.spacing(10),
            height: theme.spacing(10),
          }}
        />
      </CustomBadge>
    </Stack>
  );
};
