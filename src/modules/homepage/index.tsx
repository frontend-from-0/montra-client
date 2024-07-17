import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BottomNavigation } from '../../shared-components/BottomNavigation';
import { Link } from 'react-router-dom';
import DateTime from '../../shared-components/DateTime/index';
import WifiIcon from '@mui/icons-material/Wifi';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import personImage from '../../assets/illustrations/05.png';
import { ArrowDropDown } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import {ReactComponent as Graphic} from "../../assets/illustrations/graphic.svg";

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
  zIndex:"1000",
  backgroundColor:"#fff"
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
    <Stack sx={{ minHeight: '100vh', position: 'relative', width: '375px' }}>
      <StyledRectangle>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          maxWidth='375px'
          height='44px'
          padding='0 16px'
        >
          <Typography variant='body2' fontWeight='700'>
            <DateTime />
          </Typography>
          <Box display='flex' alignItems='center' gap='4px'>
            <SignalCellularAltIcon fontSize='small' />
            <WifiIcon fontSize='small' />
            <BatteryFullIcon
              fontSize='small'
              sx={{ transform: 'rotate(90deg)' }}
            />
          </Box>
        </Box>

        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          maxWidth='375px'
          height='64px'
          padding='0 16px'
        >
          <Box
            sx={{
              border: '2px solid #7F3DFF',
              borderRadius: '50%',
              padding: '2px',
            }}
          >
            <Avatar alt='user image' src={personImage} />
          </Box>

          <Box display='flex' flexDirection='row' alignItems='center'>
            <IconButton>
              <ArrowDropDown />
            </IconButton>
            <Typography>October</Typography>
          </Box>

          <Box sx={{ color: '#7F3DFF' }}>
            <NotificationsIcon />
          </Box>
        </Box>

        <Typography sx={{ color: '#91919F', fontSize: '14px' }}>
          Account Balance
        </Typography>
        <Typography
          sx={{ color: '#161719', fontSize: '40px', fontWeight: '600' }}
        >
          $9400
        </Typography>

        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <Box
            width='164px'
            height='80px'
            borderRadius='28px'
            bgcolor='#00A86B'
            marginLeft='16px'
            display='flex'
            flexDirection='row'
            alignItems='center'
          >
            <Box
              width='44px'
              height='44px'
              borderRadius='16px'
              bgcolor='#fff'
              color='#00A86B'
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              marginLeft='16px'
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
            width='164px'
            height='80px'
            borderRadius='28px'
            bgcolor='#FD3C4A'
            marginRight='16px'
            display='flex'
            flexDirection='row'
            alignItems='center'
          >
            <Box
              width='44px'
              height='44px'
              borderRadius='16px'
              bgcolor='#fff'
              color='#FD3C4A'
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              marginLeft='16px'
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
        </Box>

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

      <Box display='flex' flexDirection='row' padding="15px">
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
        <Box display='flex' flexDirection='row' flexGrow={1} justifyContent='space-between' padding="0px 9px" >
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            padding="3px"
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
            padding="3px"
            alignItems="end"
          >
            <Typography fontSize="16px" fontWeight="600" color="#FD3C4A">- $120</Typography>
            <Typography fontSize="13px" fontWeight="500" color="#91919F">10:00 AM</Typography>
          </Box>
        </Box>
      </Box>

      <Box display='flex' flexDirection='row' padding="15px">
        <Box
          width='60px'
          height='60px'
          bgcolor='#EEE5FF'
          borderRadius='16px'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >

          <EventRepeatIcon sx={{ width: "40px", height: "40px", color: "#7F3DFF" }} />
        </Box>
        <Box display='flex' flexDirection='row' flexGrow={1} justifyContent='space-between' padding="0px 9px" >
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            padding="3px"
          >
            <Typography fontSize='16px' color='#292B2D'>
              Shopping
            </Typography>
            <Typography fontSize='13px' color='#91919F'>
              Disney+ Annual..
            </Typography>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            padding="3px"
            alignItems="end"
          >
            <Typography fontSize="16px" fontWeight="600" color="#FD3C4A">- $80</Typography>
            <Typography fontSize="13px" fontWeight="500" color="#91919F">03:30 PM</Typography>
          </Box>
        </Box>
      </Box>

      <Box display='flex' flexDirection='row' padding="15px">
        <Box
          width='60px'
          height='60px'
          bgcolor='#FDD5D7'
          borderRadius='16px'
          display='flex'
          alignItems='center'
          justifyContent='center'
        >

          <RestaurantIcon sx={{ width: "40px", height: "40px", color: "#FD3C4A" }} />
        </Box>
        <Box display='flex' flexDirection='row' flexGrow={1} justifyContent='space-between' padding="0px 9px" >
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            padding="3px"
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
            padding="3px"
            alignItems="end"
          >
            <Typography fontSize="16px" fontWeight="600" color="#FD3C4A">- $32</Typography>
            <Typography fontSize="13px" fontWeight="500" color="#91919F">07:30 PM</Typography>
          </Box>
        </Box>
      </Box>

      <StyledBottomNavigationContainer>
        <BottomNavigation />
      </StyledBottomNavigationContainer>
    </Stack>
  );
};
