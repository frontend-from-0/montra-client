import { Box, Container } from '@mui/material';
import { HalfTypeNavigation } from '../../shared-components/Navigation/TopNavigation/HalfTypeNavigation';
import { colors } from 'src/styles/colors';
import { ListItemSelect } from '../../shared-components/Card/ListItems/ListItemSelect';
import { useState } from 'react';
import { Security } from 'src/types/Security';
import { UserActionType, useUserDispatch } from 'src/context/UserContext';

export const SecurityPage = () => {
  const [selectedSecurity, setSelectedSecurity] = useState<Security | null>(
    null,
  );

  const dispatch = useUserDispatch();

  const handleSelectedSecurity = (security: Security) => {
    setSelectedSecurity(security);
    dispatch?.({
      type: UserActionType.SET_SECURITY,
      payload: security,
    });
  };

  return (
    <Container>
      <HalfTypeNavigation title='Security' color={colors.dark[100]} />
      <Box sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)', mt: -1 }} />
      {Object.values(Security).map((sec) => (
        <ListItemSelect
          key={sec}
          title={sec}
          isSelected={selectedSecurity === sec}
          setIsSelected={() => handleSelectedSecurity(sec)}
        />
      ))}
    </Container>
  );
};
