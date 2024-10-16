import { Avatar, Box, Stack, Typography } from '@mui/material';
import { BottomNavigation } from '../../shared-components/BottomNavigation/index';
import { theme } from 'src/styles/theme';
import { colors } from 'src/styles/colors';
import personImage from '../../assets/illustrations/05.png';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { ProfilePageCards } from '../../shared-components/Card/ProfilePageCards/ProfilePageCards';
import { LinkTo } from '../../shared-components/LinkTo';

export const Profile = () => {
  return (
    <Stack sx={{ bgcolor: colors.light[60] }}>
      <Stack
        direction='row'
        justifyContent='space-around'
        alignItems='center'
        sx={{ padding: theme.spacing(2), margin: theme.spacing(5) }}
      >
        <Stack direction='row' gap={theme.spacing(3)} alignItems='center'>
          <Box
            sx={{
              border: `${theme.spacing(0.5)} solid ${colors.violet[100]}`,
              borderRadius: '50%',
              padding: theme.spacing(0.5),
            }}
          >
            <Avatar
              alt='Profile picture'
              src={personImage}
              sx={{ width: theme.spacing(17), height: theme.spacing(17) }}
            />
          </Box>
          <Stack direction='column' gap={theme.spacing(1)}>
            <Typography
              sx={{ color: colors.dark[25], fontSize: theme.spacing(3) }}
            >
              Username
            </Typography>
            <Typography sx={{ fontWeight: 'bold' }}>Iriana Saliha</Typography>
          </Stack>
        </Stack>
        <CreateOutlinedIcon />
      </Stack>

      <Stack
        direction='column'
        margin={theme.spacing(8)}
        gap='1px'
        sx={{ height: `calc(100vh - ${theme.spacing(70)})` }}
      >
        <Box
          sx={{
            bgcolor: colors.light[100],
            padding: theme.spacing(4),
            borderRadius: `${theme.spacing(5)} ${theme.spacing(5)} ${theme.spacing(0)} ${theme.spacing(0)}`,
          }}
        >
          <ProfilePageCards
            bgcolor={colors.violet[20]}
            icon={
              <AccountBalanceWalletOutlinedIcon
                sx={{ color: colors.violet[100] }}
              />
            }
            profileActions='Account'
            profileActionsColor={colors.dark[100]}
          />
        </Box>

        <Box
          sx={{
            bgcolor: colors.light[100],
            padding: theme.spacing(4),
          }}
        >
          <LinkTo to='/profile/settings'>
            <ProfilePageCards
              bgcolor={colors.violet[20]}
              icon={<SettingsOutlinedIcon sx={{ color: colors.violet[100] }} />}
              profileActions='Settings'
              profileActionsColor={colors.dark[100]}
            />
          </LinkTo>
        </Box>

        <Box
          sx={{
            bgcolor: colors.light[100],
            padding: theme.spacing(4),
          }}
        >
          <ProfilePageCards
            bgcolor={colors.violet[20]}
            icon={<FileUploadOutlinedIcon sx={{ color: colors.violet[100] }} />}
            profileActions='Export Data'
            profileActionsColor={colors.dark[100]}
          />
        </Box>

        <Box
          sx={{
            bgcolor: colors.light[100],
            padding: theme.spacing(4),
            borderRadius: `${theme.spacing(0)} ${theme.spacing(0)} ${theme.spacing(5)} ${theme.spacing(5)}`,
          }}
        >
          <ProfilePageCards
            bgcolor={colors.red[20]}
            icon={<LogoutOutlinedIcon sx={{ color: colors.red[100] }} />}
            profileActions='Logout'
            profileActionsColor={colors.dark[100]}
          />
        </Box>
      </Stack>
      <Box sx={{ bgcolor: colors.light[100] }}>
        <BottomNavigation />
      </Box>
    </Stack>
  );
};
