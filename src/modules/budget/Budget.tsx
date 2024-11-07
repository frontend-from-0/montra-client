import { Stack, Typography } from '@mui/material';
import { BottomNavigation } from '../../shared-components/Navigation/BottomNavigation/index';
import { colors } from 'src/styles/colors';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { theme } from 'src/styles/theme';
import { Primary } from '../../shared-components/Navigation/Button/Large/Primary';

export const Budget = () => {
  return (
    <Stack sx={{ backgroundColor: colors.violet[100] }}>
      <Stack
        direction='row'
        justifyContent='space-between'
        padding={theme.spacing(1)}
        color={colors.light[80]}
        alignItems='center'
        margin={theme.spacing(5)}
      >
        <NavigateBeforeIcon sx={{ fontSize: theme.spacing(10) }} />
        <Typography sx={{ fontSize: theme.spacing(5), fontWeight: 'bold' }}>
          May
        </Typography>
        <NavigateNextIcon sx={{ fontSize: theme.spacing(10) }} />
      </Stack>

      <Stack
        sx={{
          backgroundColor: colors.light[100],
          borderRadius: `${theme.spacing(6)} ${theme.spacing(6)} 0px 0px`,
        }}
      >
        <Stack
          direction='column'
          alignItems='center'
          justifyContent='center'
          sx={{ height: `calc(100vh - ${theme.spacing(63)})` }}
        >
          <Typography color={colors.dark[25]}>
            You don't have a budget.
          </Typography>
          <Typography color={colors.dark[25]}>
            Let's make one so you in control.
          </Typography>
        </Stack>
        <Primary btnText='Create a budget' />

        <BottomNavigation />
      </Stack>
    </Stack>
  );
};
