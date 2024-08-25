import HomeIcon from '@mui/icons-material/Home';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import DataSaverOffOutlinedIcon from '@mui/icons-material/DataSaverOffOutlined';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { colors } from 'src/styles/colors';
import { theme } from 'src/styles/theme';
import { MenuOptions, useAppContext } from 'src/context/AppContext';
import { Link } from 'react-router-dom';

const StyledDivBottomNavigation = styled('div')({
  display: 'flex',
  width: '100%',
  height: '70px',
  alignItems: 'center',
  justifyContent: 'space-around',
});

const StyledIconButton = styled('div')<{ active: boolean }>(
  ({ theme, active }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '35px',
    height: '48px',
    alignItems: 'center',
    color: active ? theme.palette.primary.main : colors.light[20],
    cursor: 'pointer',
  }),
);

const StyledDivLeftSide = styled('div')({
  display: 'flex',
  width: '40%',
  justifyContent: 'space-around',
});
const StyledDivMidSide = styled('div')({
  display: 'flex',
  width: '20%',
  justifyContent: 'space-around',
});
const StyledDivRightSide = styled('div')({
  display: 'flex',
  width: '40%',
  justifyContent: 'space-around',
});

export const BottomNavigation: React.FC = () => {
  const { activeTab, setActiveTab } = useAppContext();

  const handleButtonClick = (buttonName: any) => {
    setActiveTab(buttonName);
  };

  return (
    <StyledDivBottomNavigation>
      <StyledDivLeftSide>
        <StyledIconButton
          active={activeTab === MenuOptions.HOME}
          onClick={() => handleButtonClick('home')}
        >
          <HomeIcon fontSize='large' />
          <Typography fontSize='small'>Home</Typography>
        </StyledIconButton>
        <StyledIconButton
          active={activeTab === MenuOptions.TRANSACTION}
          onClick={() => handleButtonClick('transaction')}
        >
          <SyncAltOutlinedIcon fontSize='large' />
          <Typography fontSize='small'>Transaction</Typography>
        </StyledIconButton>
      </StyledDivLeftSide>

      <StyledDivMidSide>
        <StyledIconButton
          active={activeTab === MenuOptions.ADDBUTTON}
          onClick={() => handleButtonClick('addButton')}
        >
          <AddCircleIcon
            sx={{
              fontSize: 60,
              position: 'absolute',
              marginTop: '-20px',
              color: theme.palette.primary.main,
            }}
          />
        </StyledIconButton>
      </StyledDivMidSide>

      <StyledDivRightSide>
        <StyledIconButton
          active={activeTab === MenuOptions.BUDGET}
          onClick={() => handleButtonClick('budget')}
        >
          <DataSaverOffOutlinedIcon fontSize='large' />
          <Typography fontSize='small'>Budget</Typography>
        </StyledIconButton>
        <Link to={'/profile'}>
          <StyledIconButton
            active={activeTab === MenuOptions.PROFILE}
            onClick={() => handleButtonClick('profile')}
          >
            <AccountCircleOutlinedIcon fontSize='large' />
            <Typography fontSize='small'>Profile</Typography>
          </StyledIconButton>
        </Link>
      </StyledDivRightSide>
    </StyledDivBottomNavigation>
  );
};
