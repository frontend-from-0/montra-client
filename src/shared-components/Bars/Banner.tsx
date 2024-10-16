import { Stack, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { colors } from 'src/styles/colors';
import { theme } from 'src/styles/theme';

interface BannerProps {
  bannerText: string;
}

export const Banner = ({ bannerText }: BannerProps) => {
  return (
    <Stack
      direction='row'
      justifyContent='space-between'
      bgcolor={colors.violet[20]}
      padding={theme.spacing(2)}
      borderRadius={theme.shape.borderRadius * 2}
    >
      <Typography sx={{ color: colors.violet[100] }}>{bannerText}</Typography>
      <ChevronRightIcon sx={{ color: colors.violet[100] }} />
    </Stack>
  );
};
