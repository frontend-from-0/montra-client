import { Container, Stack } from '@mui/material';
import { BottomNavigation } from '../../shared-components/Navigation/BottomNavigation/index';
import { Banner } from '../../shared-components/Navigation/Bars/Banner';
import { TransactionTypeNavigation } from '../../shared-components/Navigation/TopNavigation/TransactionTypeNavigation';
import { TitleOnly } from '../../shared-components/Navigation/Bars/TitleOnly';
import { TransactionCard } from '../../shared-components/Card/TransactionCard/TransactionCard';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import { colors } from 'src/styles/colors';
import { theme } from 'src/styles/theme';

export const Transaction = () => {
  return (
    <Container component='main'>
      <Stack
        margin={`${theme.spacing(8)} ${theme.spacing(4)}`}
        gap={theme.spacing(5)}
      >
        <TransactionTypeNavigation interval='Month' />

        <Banner bannerText='See your financial report' />
      </Stack>
      <TitleOnly content='Today' />

      <TransactionCard
        bgcolor={colors.yellow[20]}
        icon={
          <LocalMallIcon
            sx={{ width: '40px', height: '40px', color: colors.yellow[100] }}
          />
        }
        spendingtype='Shopping'
        content='Buy some grocery'
        amount='- $120'
        time='10:00 AM'
        spendingtypecolor={colors.dark[75]}
        contentcolor={colors.dark[25]}
        amountcolor={colors.red[100]}
        timecolor={colors.dark[25]}
      />

      <TransactionCard
        bgcolor={colors.violet[20]}
        icon={
          <EventRepeatIcon
            sx={{ width: '40px', height: '40px', color: colors.violet[100] }}
          />
        }
        spendingtype='Subscription'
        content='Disney+ Annual Fee'
        amount='- $80'
        time='03:30 PM'
        spendingtypecolor={colors.dark[75]}
        contentcolor={colors.dark[25]}
        amountcolor={colors.red[100]}
        timecolor={colors.dark[25]}
      />

      <TransactionCard
        bgcolor={colors.red[20]}
        icon={
          <RestaurantIcon
            sx={{ width: '40px', height: '40px', color: colors.red[100] }}
          />
        }
        spendingtype='Food'
        content='Buy a ramen'
        amount='- $32'
        time='07:30 PM'
        spendingtypecolor={colors.dark[75]}
        contentcolor={colors.dark[25]}
        amountcolor={colors.red[100]}
        timecolor={colors.dark[25]}
      />
      <TitleOnly content='Yesterday' />

      <TransactionCard
        bgcolor={colors.green[20]}
        icon={
          <MonetizationOnIcon
            sx={{ width: '40px', height: '40px', color: colors.green[100] }}
          />
        }
        spendingtype='Salary'
        content='Salary for July'
        amount='+ 5000'
        time='04:30 PM'
        spendingtypecolor={colors.dark[75]}
        contentcolor={colors.dark[25]}
        amountcolor={colors.green[100]}
        timecolor={colors.dark[25]}
      />

      <TransactionCard
        bgcolor={colors.blue[20]}
        icon={
          <AirportShuttleIcon
            sx={{ width: '40px', height: '40px', color: colors.blue[100] }}
          />
        }
        spendingtype='Transportation'
        content='Charging Tesla'
        amount='-$18'
        time='08:30 PM'
        spendingtypecolor={colors.dark[75]}
        contentcolor={colors.dark[25]}
        amountcolor={colors.red[100]}
        timecolor={colors.dark[25]}
      />

      <BottomNavigation />
    </Container>
  );
};
