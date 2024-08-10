import { Stack, Typography } from '@mui/material';
import { Title3 } from '../Typography/Title3';
import { colors } from 'src/styles/colors';
import { theme } from 'src/styles/theme';

interface TitleWithCtaProps {
  title: string;
  label: string;
}

export const TitleWithCta: React.FC<TitleWithCtaProps> = ({ title, label }) => {
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      whiteSpace='nowrap'
      margin={theme.spacing(4)}
    >
      <Title3 color={colors.dark[100]}>{title}</Title3>
      {
        //TODO: Replace with a Pill shared component
      }
      <Typography
        sx={{
          padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
          borderRadius: theme.shape.borderRadius * 10,
        }}
        bgcolor={colors.violet[20]}
        color={colors.violet[100]}
        fontSize='14px'
      >
        {label}
      </Typography>
    </Stack>
  );
};
