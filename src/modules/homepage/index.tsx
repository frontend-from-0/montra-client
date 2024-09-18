import { Box, Container, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BottomNavigation } from '../../shared-components/BottomNavigation';
import personImage from '../../assets/illustrations/05.png';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { colors } from 'src/styles/colors';
import { Regular3 } from '../../shared-components/Typography/Regular3/index';
import { IncomeExpenseCard } from './IncomeExpenseCard';
import { SpendFrequency } from './SpendFrequency';
import { TitleWithCta } from '../../shared-components/Bars/TitleWithCta';
import { TransactionCard } from '../../shared-components/Card/TransactionCard/TransactionCard';
import { TimePeriodTabs } from '../../shared-components/Navigation/Tabs/TimePeriodTabs';
import { theme } from 'src/styles/theme';
import { TransactionType } from 'src/types/Category';
import { HomeNavigation } from '../../shared-components/Navigation/TopNavigation/HomeNavigation';
import { Settings } from '../settings/SettingsPage';
import { SecurityPage } from '../settings/SecurityPage';
import { CurrencyPage } from '../settings/CurrencyPage';
import { ThemePage } from '../settings/ThemePage';
import { NotificationPage } from '../settings/NotificationPage';

const StyledBottomNavigationContainer = styled('div')({
  position: 'sticky',
  bottom: 0,
  left: 0,
  right: 0,
  width: '375px',
  zIndex: '1000',
  backgroundColor: '#fff',
});

const StyledGradientContainer = styled(Box)({
  textAlign: 'center',
  borderRadius: `0px 0px ${theme.shape.borderRadius * 8} ${theme.shape.borderRadius * 8}`,
  background:
    'linear-gradient(183.33deg, #FFF6E6 9.56%, rgba(248, 237, 216, 0) 124.27%)',
});

export const Home = () => {
  return (
    <Container component='main'>
      <StyledGradientContainer>
        <HomeNavigation month='October' personImage={personImage} />

        <Regular3 color={colors.dark[25]}>Account Balance</Regular3>

        <Typography
          sx={{ color: colors.dark[75], fontSize: '40px', fontWeight: '600' }}
        >
          $9400
        </Typography>

        <Stack
          direction='row'
          justifyContent='space-around'
          mt={theme.spacing(4)}
        >
          <IncomeExpenseCard
            transactionType={TransactionType.income}
            content='Income'
            amount='$5000'
          />
          <IncomeExpenseCard
            transactionType={TransactionType.expense}
            content='Expenses'
            amount='$1200'
          />
        </Stack>
      </StyledGradientContainer>

      <SpendFrequency />

      <TimePeriodTabs />

      <TitleWithCta title='Recent Transaction' label='See All' />

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

      <Settings />
      <SecurityPage />
      <CurrencyPage />
      <ThemePage />
      <NotificationPage />

      <StyledBottomNavigationContainer>
        <BottomNavigation />
      </StyledBottomNavigationContainer>
    </Container>
  );
};
