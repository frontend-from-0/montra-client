import { useAppContext } from 'src/context/AppContext';
import styled from 'styled-components';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import IosShareIcon from '@mui/icons-material/IosShare';
import LogoutIcon from '@mui/icons-material/Logout';
import { colors } from 'src/styles/colors';

const StyledDivProfile = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
  height: 100vh;
`;
const StyledDivUserDetailsSection = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 30px;
`;
const StyledDivProfilePicture = styled('div')`
  border: 2px solid #ad00ff;
  border-radius: 50%;
  padding: 3px;
  width: 80px;
  height: 80px;
`;
const StyledDivUserInfo = styled('div')``;
const StyledDivEditProfileButton = styled('button')`
  margin: 10px;
  color: #fff;
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: #f1f1fa;
  }
`;
const StyledDivAccountButtonGroup = styled('div')`
  width: 90%;
  background-color: #fff;
  border-radius: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledAccountButtons = styled('button')`
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  border-bottom: 2px solid #f6f6f6;
  background-color: transparent;
  cursor: pointer;
  padding: 20px;
`;
const StyledAccountButtonsArea = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background-color: #eee5ff;
`;
const StyledLogoutButton = styled('button')`
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 20px;
`;
const StyledAccountLogoutButtonArea = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background-color: #ffe2e4;
`;

export const Profile = () => {
  const { users } = useAppContext();
  return (
    <StyledDivProfile>
      {users.map((user) => (
        <StyledDivUserDetailsSection key={user.id}>
          <StyledDivProfilePicture>
            {user.profilePicture ? (
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
                src={user.profilePicture}
                alt={`${user.name} profile`}
              />
            ) : (
              <PermIdentityIcon
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'lightGray',
                  objectFit: 'cover',
                }}
              />
            )}
          </StyledDivProfilePicture>

          <StyledDivUserInfo>
            <Typography
              style={{ fontWeight: '500', fontSize: '14px', color: '91919F' }}
            >
              {user.username}
            </Typography>
            <Typography style={{ fontWeight: '600', fontSize: '24px' }}>
              {user.name} {user.surname}
            </Typography>
          </StyledDivUserInfo>

          <StyledDivEditProfileButton>
            <EditOutlinedIcon style={{ color: 'black', fontSize: '30px' }} />
          </StyledDivEditProfileButton>
        </StyledDivUserDetailsSection>
      ))}
      <StyledDivAccountButtonGroup>
        <StyledAccountButtons>
          <StyledAccountButtonsArea>
            <AccountBalanceWalletIcon
              style={{
                width: '32px',
                height: '32px',
                color: colors.violet[100],
              }}
            />
          </StyledAccountButtonsArea>
          <Typography
            style={{ fontWeight: '500', marginLeft: '10px', fontSize: '16px' }}
          >
            Account
          </Typography>
        </StyledAccountButtons>
        <StyledAccountButtons>
          <StyledAccountButtonsArea>
            <SettingsIcon
              style={{
                width: '32px',
                height: '32px',
                color: colors.violet[100],
              }}
            />
          </StyledAccountButtonsArea>
          <Typography
            style={{ fontWeight: '500', marginLeft: '10px', fontSize: '16px' }}
          >
            Settings
          </Typography>
        </StyledAccountButtons>
        <StyledAccountButtons>
          <StyledAccountButtonsArea>
            <IosShareIcon
              style={{
                width: '32px',
                height: '32px',
                color: colors.violet[100],
              }}
            />
          </StyledAccountButtonsArea>
          <Typography
            style={{ fontWeight: '500', marginLeft: '10px', fontSize: '16px' }}
          >
            Export Data
          </Typography>
        </StyledAccountButtons>
        <StyledLogoutButton>
          <StyledAccountLogoutButtonArea>
            <LogoutIcon
              style={{
                width: '32px',
                height: '32px',
                color: colors.red[100],
              }}
            />
          </StyledAccountLogoutButtonArea>
          <Typography
            style={{ fontWeight: '500', marginLeft: '10px', fontSize: '16px' }}
          >
            Logout
          </Typography>
        </StyledLogoutButton>
      </StyledDivAccountButtonGroup>
    </StyledDivProfile>
  );
};
