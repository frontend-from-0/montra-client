import { Box, Container } from '@mui/material';
import { HalfTypeNavigation } from '../../shared-components/Navigation/TopNavigation/HalfTypeNavigation';
import { colors } from 'src/styles/colors';
import { ListItemSelect } from '../../shared-components/Card/ListItems/ListItemSelect';
import { Security } from 'src/types/Security';
import {
  UserActionType,
  useUser,
  useUserDispatch,
} from 'src/context/UserContext';

export const SecurityPage = () => {
  const { security } = useUser() || {};

  const dispatch = useUserDispatch();

  const handleSelectedSecurity = (security: Security) => {
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
          isSelected={security === sec}
          setIsSelected={() => handleSelectedSecurity(sec)}
        />
      ))}
    </Container>
  );
};
