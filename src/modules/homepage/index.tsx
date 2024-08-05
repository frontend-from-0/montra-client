import {
  Avatar,
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { BottomNavigation } from '../../shared-components/BottomNavigation';
import personImage from '../../assets/illustrations/05.png';
import { ArrowDropDown } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { colors } from 'src/styles/colors';
import { Regular3 } from '../../shared-components/Typography/Regular3/index';
import { IncomeExpenseCard } from './IncomeExpense';
import { SpendFrequency } from './SpendFrequency';
import { RecentTransaction } from '../../shared-components/Bars/RecentTransaction';
import { TransactionCard } from '../../shared-components/Card/TransactionCard';
import { TimePeriodTabs } from '../../shared-components/Navigation/Tabs/TimePeriodTabs';

const StyledPageContentDiv = styled('div')({
  overflow: 'auto',
  maxHeight: 'calc(100vh - 70px)',
});

const StyledBottomNavigationContainer = styled('div')({
  position: 'sticky',
  bottom: 0,
  left: 0,
  right: 0,
  width: '375px',
  zIndex: '1000',
  backgroundColor: '#fff',
});

const StyledRectangle = styled(Box)({
  textAlign: 'center',
  width: '375px',
  height: '312px',
  gap: '0px',
  borderRadius: '0px 0px 32px 32px',
  background:
    'linear-gradient(183.33deg, #FFF6E6 9.56%, rgba(248, 237, 216, 0) 124.27%)',
});

export const Homepage = () => {
  return (
    <Container component='main' maxWidth='xs'>
      <StyledRectangle>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          padding='8px 16px'
        >
          <Box
            sx={{
              border: `2px solid ${colors.violet[100]}`,
              borderRadius: '50%',
              padding: '2px',
            }}
          >
            <Avatar alt='user image' src={personImage} />
          </Box>

          <Stack direction='row' alignItems='center'>
            <IconButton>
              <ArrowDropDown />
            </IconButton>
            <Regular3>October</Regular3>
          </Stack>

          <NotificationsIcon style={{ color: colors.violet[100] }} />
        </Box>

        <Regular3 style={{ color: colors.dark[25] }}>Account Balance</Regular3>

        <Typography
          sx={{ color: colors.dark[75], fontSize: '40px', fontWeight: '600' }}
        >
          $9400
        </Typography>

        <Stack
          display='flex'
          flexDirection='row'
          justifyContent='space-around'
          mt='15px'
        >
          <IncomeExpenseCard
            children={<ArrowDownwardIcon />}
            bgcolor={colors.green[100]}
            color={colors.green[100]}
            content='Income'
            amount='$5000'
          />
          <IncomeExpenseCard
            children={<ArrowUpwardIcon />}
            bgcolor={colors.red[100]}
            color={colors.red[100]}
            content='Expenses'
            amount='$1200'
          />
        </Stack>
      </StyledRectangle>

      <SpendFrequency />

      <TimePeriodTabs />

      <RecentTransaction />

      <TransactionCard
        bgcolor={colors.yellow[20]}
        children={
          <LocalMallIcon
            sx={{ width: '40px', height: '40px', color: '#FCAC12' }}
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
        children={
          <EventRepeatIcon
            sx={{ width: '40px', height: '40px', color: '#7F3DFF' }}
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
        children={
          <RestaurantIcon
            sx={{ width: '40px', height: '40px', color: '#FD3C4A' }}
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

      <StyledBottomNavigationContainer>
        <BottomNavigation />
      </StyledBottomNavigationContainer>
    </Container>
  );
};
