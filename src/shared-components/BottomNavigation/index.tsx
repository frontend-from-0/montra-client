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
import { LinkTo } from '../LinkTo';

const StyledBottomNavigationContainer = styled('div')({
  position: 'sticky',
  bottom: 0,
  left: 0,
  right: 0,
  width: '375px',
  zIndex: '1000',
  backgroundColor: '#fff',
});

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
    <StyledBottomNavigationContainer>
      <StyledDivBottomNavigation>
        <StyledDivLeftSide>
          <StyledIconButton
            active={activeTab === MenuOptions.HOME}
            onClick={() => handleButtonClick('home')}
          >
            <LinkTo to='/'>
              <HomeIcon fontSize='large' />
              <Typography fontSize='small'>Home</Typography>
            </LinkTo>
          </StyledIconButton>
          <StyledIconButton
            active={activeTab === MenuOptions.TRANSACTION}
            onClick={() => handleButtonClick('transaction')}
          >
            <LinkTo to='/transaction'>
              <SyncAltOutlinedIcon fontSize='large' />
              <Typography fontSize='small'>Transaction</Typography>
            </LinkTo>
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
            <LinkTo to='/budget'>
              <DataSaverOffOutlinedIcon fontSize='large' />
              <Typography fontSize='small'>Budget</Typography>
            </LinkTo>
          </StyledIconButton>
          <StyledIconButton
            active={activeTab === MenuOptions.PROFILE}
            onClick={() => handleButtonClick('profile')}
          >
            <LinkTo to='/profile'>
              <AccountCircleOutlinedIcon fontSize='large' />
              <Typography fontSize='small'>Profile</Typography>
            </LinkTo>
          </StyledIconButton>
        </StyledDivRightSide>
      </StyledDivBottomNavigation>
    </StyledBottomNavigationContainer>
  );
};
