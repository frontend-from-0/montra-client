import { Box, Stack } from '@mui/material';
import { ReactNode } from 'react';
import { theme } from 'src/styles/theme';
import { Regular2 } from '../../Typography/Regular2/index';

interface ProfilePageCardsProps {
  bgcolor: string;
  icon: ReactNode;
  profileActions: string;
  profileActionsColor: string;
}

export const ProfilePageCards = ({
  bgcolor,
  icon,
  profileActions,
  profileActionsColor,
}: ProfilePageCardsProps) => {
  return (
    <Stack direction='row' alignItems='center' gap={theme.spacing(3)}>
      <Box
        width='50px'
        height='50px'
        bgcolor={bgcolor}
        borderRadius={theme.shape.borderRadius}
        display='flex'
        alignItems='center'
        justifyContent='center'
      >
        {icon}
      </Box>
      <Regular2 color={profileActionsColor}>{profileActions}</Regular2>
    </Stack>
  );
};
