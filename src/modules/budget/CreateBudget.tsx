import { Box, Stack, Typography } from '@mui/material';
import { HalfTypeNavigation } from '../../shared-components/Navigation/TopNavigation/HalfTypeNavigation';
import { useState } from 'react';
import { colors } from 'src/styles/colors';
import { theme } from 'src/styles/theme';
import { RecurringTransactionDefault } from '../../shared-components/Card/BottomRecurringTransaction/RecurringTransactionDefault';
import { ListItemSwitch } from '../../shared-components/Card/ListItems/ListItemSwitch';
import { Primary } from '../../shared-components/Navigation/Button/Large/Primary';
import { CustomSlider } from '../../shared-components/Form/Control/Slider';

export const CreateBudget = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <Stack sx={{ backgroundColor: colors.violet[100] }}>
      <Stack
        direction='column'
        justifyContent='space-between'
        sx={{ height: `calc(100vh - ${theme.spacing(80)})` }}
      >
        <Box sx={{ margin: theme.spacing(4) }}>
          <HalfTypeNavigation color={colors.light[100]} title='Create Budget' />
        </Box>
        <Stack sx={{ margin: theme.spacing(5) }}>
          <Typography
            sx={{
              fontWeight: theme.spacing(150),
              color: colors.light[20],
              fontSize: theme.spacing(4.5),
            }}
          >
            How much do you want to spend?
          </Typography>
          <Typography
            sx={{
              fontSize: theme.spacing(16),
              color: colors.light[100],
              fontWeight: theme.spacing(150),
            }}
          >
            $0
          </Typography>
        </Stack>
      </Stack>

      <Stack
        sx={{
          backgroundColor: colors.light[100],
          borderRadius: `${theme.spacing(7)} ${theme.spacing(6)} ${theme.spacing(0)} ${theme.spacing(0)}`,
        }}
      >
        <Stack
          direction='column'
          justifyContent='space-between'
          gap={theme.spacing(1)}
        >
          <RecurringTransactionDefault title='Category' />
          <ListItemSwitch
            title='Receive Alert'
            description='Receive alert when it reaches some point.'
            isOn={isOn}
            onToggle={() => setIsOn(!isOn)}
          />

          {isOn ? (
            <CustomSlider
              defaultValue={80}
              color={colors.violet[100]}
              railcolor={colors.dark[25]}
            />
          ) : null}

          <Primary btnText='Continue' />
        </Stack>
      </Stack>
    </Stack>
  );
};
