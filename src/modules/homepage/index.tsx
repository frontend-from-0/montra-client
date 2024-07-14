import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { BottomNavigation } from '../../shared-components/BottomNavigation';
import { Link } from 'react-router-dom';
import DateTime from '../../shared-components/DateTime/index';
import WifiIcon from '@mui/icons-material/Wifi';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import personImage from "../../assets/illustrations/05.png";
import { useState } from 'react';
import { ArrowDropDown, CenterFocusStrong } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const StyledPageContentDiv = styled('div')({
    overflow: 'auto',
    maxHeight: 'calc(100vh - 70px)',
});

const StyledBottomNavigationContainer = styled('div')({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: "375px"
});

const StyledRectangle = styled(Box)({
    textAlign: "center",
    width: "375px",
    height: "312px",
    gap: "0px",
    borderRadius: "0px 0px 32px 32px",
    background: "linear-gradient(183.33deg, #FFF6E6 9.56%, rgba(248, 237, 216, 0) 124.27%)"
});

export const Homepage = () => {

    const [value, setValue] = useState<string>("");
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <Stack
            justifyContent='space-between'
            sx={{ minHeight: '100vh', position: 'relative' }}
        >
            <StyledRectangle>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    maxWidth="375px"
                    height="44px"
                    padding="0 16px"
                >
                    <Typography variant='body2' fontWeight="700"><DateTime /></Typography>
                    <Box
                        display="flex"
                        alignItems="center"
                        gap="4px" >
                        <SignalCellularAltIcon fontSize='small' />
                        <WifiIcon fontSize='small' />
                        <BatteryFullIcon fontSize='small' sx={{ transform: 'rotate(90deg)' }} />
                    </Box>
                </Box>

                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    maxWidth="375px"
                    height="64px"
                    padding="0 16px"
                >
                    <Box sx={{ border: "2px solid #7F3DFF", borderRadius: "50%", padding: "2px" }}>
                        <Avatar alt='user image' src={personImage} />
                    </Box>


                    <Box display="flex" flexDirection="row" alignItems="center">
                        <IconButton>
                            <ArrowDropDown />
                        </IconButton>
                        <Typography>October</Typography>
                    </Box>

                    <Box sx={{ color: "#7F3DFF" }}>
                        <NotificationsIcon />
                    </Box>

                </Box>

                <Typography sx={{ color: "#91919F", fontSize: "14px" }}>Account Balance</Typography>
                <Typography sx={{ color: "#161719", fontSize: "40px", fontWeight: "600" }}>$9400</Typography>

                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                >
                    <Box
                        width="164px"
                        height="80px"
                        borderRadius="28px"
                        bgcolor="#00A86B"
                        marginLeft="16px"
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                    >
                        <Box
                            width="44px"
                            height="44px"
                            borderRadius="16px"
                            bgcolor="#fff"
                            color="#00A86B"
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            marginLeft="16px"
                        >
                            <ExpandMoreIcon />
                            <CameraAltIcon />

                        </Box>
                        <Box color="#fff" marginLeft="8px">
                            <Typography sx={{ fontSize: "14px" }}>Income</Typography>
                            <Typography sx={{ fontSize: "22px", fontWeight: "600" }}>$5000</Typography>
                        </Box>
                    </Box>
                    <Box
                        width="164px"
                        height="80px"
                        borderRadius="28px"
                        bgcolor="#FD3C4A"
                        marginRight="16px"
                    >

                    </Box>
                </Box>

                <StyledPageContentDiv>
                    <div>
                        <Link to='/onboarding/introduction'>
                            Onboarding introduction
                        </Link>
                    </div>
                    <div>
                        <Link to='/expense/new'>Add new expense</Link>
                    </div>
                </StyledPageContentDiv>
            </StyledRectangle>

            <StyledBottomNavigationContainer>
                <BottomNavigation />
            </StyledBottomNavigationContainer>
        </Stack>
    )
} 