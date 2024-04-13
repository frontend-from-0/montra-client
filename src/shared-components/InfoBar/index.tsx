import DateTime from '../DateTime';
import WifiIcon from '@mui/icons-material/Wifi';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import { styled, Theme } from '@mui/material/styles';

const StyledDiv = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '10px 30px',
  height: '30px',
}));

const StyledDivIcons = styled(`div`)(({ theme }: { theme: Theme }) => ({
  display: 'flex',
}));

export const InfoBar = () => {
  return (
    <StyledDiv>
      <DateTime />
      <StyledDivIcons>
        <WifiIcon fontSize='small' sx={{ color: 'white' }} />
        <SignalCellularAltIcon fontSize='small' sx={{ color: 'white' }} />
        <BatteryFullIcon fontSize='small' sx={{ color: 'white' }} />
      </StyledDivIcons>
    </StyledDiv>
  );
};
