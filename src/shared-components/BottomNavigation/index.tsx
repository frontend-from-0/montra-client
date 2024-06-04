import HomeIcon from '@mui/icons-material/Home';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { colors } from 'src/styles/colors';

const StyledDivBottomNavigation = styled(`div`)(({}: {}) => ({
  display: 'flex',
  width: '375px',
  height: '70px',
  alignItems: 'center',
  justifyContent: 'space-around',
}));

const StyledIconButton = styled('div')<{ active: boolean }>(({ active }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '35px',
  height: '48px',
  alignItems: 'center',
  color: active ? colors.blue[100] : colors.light[20],
  cursor: 'pointer',
}));

export const BottomNavigation = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  console.log(activeButton);

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <StyledDivBottomNavigation>
      <div
        style={{
          display: 'flex',
          width: '40%',
          justifyContent: 'space-around',
        }}
      >
        <StyledIconButton
          active={activeButton === 'home'}
          onClick={() => handleButtonClick('home')}
        >
          <HomeIcon fontSize='large' />
          <Typography fontSize='small'>Home</Typography>
        </StyledIconButton>
        <StyledIconButton
          active={activeButton === 'transaction'}
          onClick={() => handleButtonClick('transaction')}
        >
          <SyncAltOutlinedIcon fontSize='large' />
          <Typography fontSize='small'>Transaction</Typography>
        </StyledIconButton>
      </div>
      <div
        style={{
          display: 'flex',
          width: '20%',
          justifyContent: 'space-around',
        }}
      >
        <StyledIconButton
          active={activeButton === 'addButton'}
          onClick={() => handleButtonClick('addButton')}
        >
          <AddCircleIcon
            sx={{
              fontSize: 60,
              position: 'absolute',
              marginTop: '-20px',
              color: colors.blue[100],
            }}
          />
        </StyledIconButton>
      </div>
      <div
        style={{
          display: 'flex',
          width: '40%',
          justifyContent: 'space-around',
        }}
      >
        <StyledIconButton
          active={activeButton === 'budget'}
          onClick={() => handleButtonClick('budget')}
        >
          <DataSaverOffOutlinedIcon fontSize='large' />
          <Typography fontSize='small'>Budget</Typography>
        </StyledIconButton>
        <StyledIconButton
          active={activeButton === 'profile'}
          onClick={() => handleButtonClick('profile')}
        >
          <AccountCircleOutlinedIcon fontSize='large' />
          <Typography fontSize='small'>Profile</Typography>
        </StyledIconButton>
      </div>
    </StyledDivBottomNavigation>
  );
};
