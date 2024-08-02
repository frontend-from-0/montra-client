import { Avatar, Box, Container, IconButton, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BottomNavigation } from '../../shared-components/BottomNavigation';
import { Link } from 'react-router-dom';
import personImage from '../../assets/illustrations/05.png';
import { ArrowDropDown } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { ReactComponent as Graphic } from '../../assets/illustrations/graphic.svg';
import { colors } from 'src/styles/colors';
import { Regular3 } from '../../shared-components/Typography/Regular3/index';
import { theme } from 'src/styles/theme';

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
    <Container component="main" sx={{ position: 'relative' }} maxWidth="xs">
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

          <Stack direction='row' alignItems="center">
            <IconButton>
              <ArrowDropDown />
            </IconButton>
            <Regular3 >
              October
            </Regular3>
          </Stack>

          <NotificationsIcon style={{ color: colors.violet[100] }} />
        </Box>

        <Regular3 style={{ color: colors.dark[25] }}>
          Account Balance
        </Regular3>

        <Typography
          sx={{ color: colors.dark[75], fontSize: '40px', fontWeight: '600' }}
        >
          $9400
        </Typography>

        <Stack display='flex' flexDirection='row' justifyContent='space-between'>
          <Box
            borderRadius= {theme.shape.borderRadius * 7}
            bgcolor='#00A86B'
            marginLeft='16px'
            display='inline-flex'
            flexDirection='row'
            alignItems='center'
            padding="10px 15px 10px 0px"
          >
            <Box
              borderRadius= {theme.shape.borderRadius * 4}
              bgcolor='#fff'
              color= {colors.green[100]}
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              marginLeft='16px'
              padding="0px 12px"
            >
              <ArrowDownwardIcon />
              <CameraAltIcon />
            </Box>
            <Box color='#fff' marginLeft='8px'>
              <Typography sx={{ fontSize: '14px' }}>Income</Typography>
              <Typography sx={{ fontSize: '22px', fontWeight: '600' }}>
                $5000
              </Typography>
            </Box>
          </Box>
          <Box
            borderRadius= {theme.shape.borderRadius * 7}
            bgcolor='#FD3C4A'
            marginRight='16px'
            display='flex'
            flexDirection='row'
            alignItems='center'
            paddingRight="15px"
          >
            <Box
              borderRadius= {theme.shape.borderRadius * 4}
              bgcolor='#fff'
              color='#FD3C4A'
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              marginLeft='16px'
              padding="0px 12px"
            >
              <ArrowUpwardIcon />
              <CameraAltIcon />
            </Box>
            <Box color='#fff' marginLeft='8px'>
              <Typography sx={{ fontSize: '14px' }}>Expenses</Typography>
              <Typography sx={{ fontSize: '22px', fontWeight: '600' }}>
                $1200
              </Typography>
            </Box>
          </Box>
        </Stack>

        {/* <StyledPageContentDiv>
                    <div>
                        <Link to='/onboarding/introduction'>
                            Onboarding introduction
                        </Link>
                    </div>
                    <div>
                        <Link to='/expense/new'>Add new expense</Link>
                    </div>
                </StyledPageContentDiv> */}
      </StyledRectangle>

      <Box padding='8px'>
        <Typography
          width='375px'
          height='48px'
          fontSize='18px'
          fontWeight='600'
          variant='h6'
          lineHeight='21.78px'
          textAlign='left'
        >
          Spend Frequency
        </Typography>
      </Box>

      <Box width='375px' height='185.5px'>
        <Graphic />
      </Box>

      <Box display='flex' flexDirection='row'>
        <Typography
          fontWeight='500'
          fontSize='14px'
          lineHeight='18px'
          textAlign='center'
          padding='8px 24px'
          color='#FCAC12'
          bgcolor='#FCEED4'
          borderRadius='16px'
        >
          Today
        </Typography>
        <Typography
          fontWeight='500'
          fontSize='14px'
          lineHeight='18px'
          textAlign='center'
          padding='8px 24px'
          color='#91919F'
        >
          Week
        </Typography>
        <Typography
          fontWeight='500'
          fontSize='14px'
          lineHeight='18px'
          textAlign='center'
          padding='8px 24px'
          color='#91919F'
        >
          Month
        </Typography>
        <Typography
          fontWeight='500'
          fontSize='14px'
          lineHeight='18px'
          textAlign='center'
          padding='8px 24px'
          color='#91919F'
        >
          Year
        </Typography>
      </Box>

      <Box
        padding='8px'
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Typography fontWeight='600' fontSize='18px' lineHeight='21.78px'>
          Recent Transaction
        </Typography>
        <Typography
          borderRadius='40px'
          padding='8px 16px'
          bgcolor='#EEE5FF'
          color='#7F3DFF'
          fontSize='14px'
        >
          See All
        </Typography>
      </Box>

      <Box display='flex' flexDirection='row' padding='15px'>
        <Box
          width='60px'
          height='60px'
          bgcolor='#FCEED4'
          borderRadius='16px'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <LocalMallIcon
            sx={{ width: '40px', height: '40px', color: '#FCAC12' }}
          />
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          flexGrow={1}
          justifyContent='space-between'
          padding='0px 9px'
        >
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            padding='3px'
          >
            <Typography fontSize='16px' color='#292B2D'>
              Shopping
            </Typography>
            <Typography fontSize='13px' color='#91919F'>
              Buy some grocery
            </Typography>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            padding='3px'
            alignItems='end'
          >
            <Typography fontSize='16px' fontWeight='600' color='#FD3C4A'>
              - $120
            </Typography>
            <Typography fontSize='13px' fontWeight='500' color='#91919F'>
              10:00 AM
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display='flex' flexDirection='row' padding='15px'>
        <Box
          width='60px'
          height='60px'
          bgcolor='#EEE5FF'
          borderRadius='16px'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <EventRepeatIcon
            sx={{ width: '40px', height: '40px', color: '#7F3DFF' }}
          />
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          flexGrow={1}
          justifyContent='space-between'
          padding='0px 9px'
        >
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            padding='3px'
          >
            <Typography fontSize='16px' color='#292B2D'>
              Subscription
            </Typography>
            <Typography fontSize='13px' color='#91919F'>
              Disney+ Annual..
            </Typography>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            padding='3px'
            alignItems='end'
          >
            <Typography fontSize='16px' fontWeight='600' color='#FD3C4A'>
              - $80
            </Typography>
            <Typography fontSize='13px' fontWeight='500' color='#91919F'>
              03:30 PM
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display='flex' flexDirection='row' padding='15px'>
        <Box
          width='60px'
          height='60px'
          bgcolor='#FDD5D7'
          borderRadius='16px'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <RestaurantIcon
            sx={{ width: '40px', height: '40px', color: '#FD3C4A' }}
          />
        </Box>
        <Box
          display='flex'
          flexDirection='row'
          flexGrow={1}
          justifyContent='space-between'
          padding='0px 9px'
        >
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            padding='3px'
          >
            <Typography fontSize='16px' color='#292B2D'>
              Food
            </Typography>
            <Typography fontSize='13px' color='#91919F'>
              Buy a ramen
            </Typography>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            padding='3px'
            alignItems='end'
          >
            <Typography fontSize='16px' fontWeight='600' color='#FD3C4A'>
              - $32
            </Typography>
            <Typography fontSize='13px' fontWeight='500' color='#91919F'>
              07:30 PM
            </Typography>
          </Box>
        </Box>
      </Box>

      <StyledBottomNavigationContainer>
        <BottomNavigation />
      </StyledBottomNavigationContainer>
    </Container>
  );
};
