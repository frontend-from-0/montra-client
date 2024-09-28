import { useAppContext } from 'src/context/AppContext';
import styled from 'styled-components';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Stack, Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import IosShareIcon from '@mui/icons-material/IosShare';
import LogoutIcon from '@mui/icons-material/Logout';
import { colors } from 'src/styles/colors';
import { Regular3 } from 'src/shared-components/Typography/Regular3';
import { Regular2 } from 'src/shared-components/Typography/Regular2';
import { Regular1 } from 'src/shared-components/Typography/Regular1';

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
const StyledMenuContainer = styled('nav')`
  width: 90%;
  background-color: #fff;
  border-radius: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
`;

const StyledMenuItem = styled('button')`
  display: flex;
  align-items: center;
  gap: 10px;
  border: none;
  border-bottom: 2px solid #f6f6f6;
  background-color: transparent;
  cursor: pointer;
  padding: 20px;
`;
const StyledIcon = styled('div')`
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
  gap: 10px;
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
  const { user } = useAppContext();
  return (
    <Stack>
      {user.map((u) => (
        <StyledDivUserDetailsSection key={u.id}>
          <StyledDivProfilePicture>
            {u.profilePicture ? (
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
                src={u.profilePicture}
                alt={`${u.name} profile`}
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
            <Regular3 color={'91919F'}>{u.username}</Regular3>
            <Typography style={{ fontWeight: '600', fontSize: '24px' }}>
              {u.name} {u.surname}
            </Typography>
          </StyledDivUserInfo>

          <StyledDivEditProfileButton>
            <EditOutlinedIcon style={{ color: 'black', fontSize: '30px' }} />
          </StyledDivEditProfileButton>
        </StyledDivUserDetailsSection>
      ))}
      <StyledMenuContainer>
        <StyledMenuItem>
          <StyledIcon>
            <AccountBalanceWalletIcon
              style={{
                width: '32px',
                height: '32px',
                color: colors.violet[100],
              }}
            />
          </StyledIcon>
          <Regular2 color={'black'}>Account</Regular2>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledIcon>
            <SettingsIcon
              style={{
                width: '32px',
                height: '32px',
                color: colors.violet[100],
              }}
            />
          </StyledIcon>
          <Regular1 sx={{ color: 'black' }} id='settings-title'>
            Settings
          </Regular1>
        </StyledMenuItem>
        <StyledMenuItem>
          <StyledIcon>
            <IosShareIcon
              style={{
                width: '32px',
                height: '32px',
                color: colors.violet[100],
              }}
            />
          </StyledIcon>
          <Regular1 sx={{ color: 'black' }} id='logout-title'>
            Export Data
          </Regular1>
        </StyledMenuItem>
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
          <Regular1 sx={{ color: 'black' }} id='logout-title'>
            Logout
          </Regular1>
        </StyledLogoutButton>
      </StyledMenuContainer>
    </Stack>
  );
};
