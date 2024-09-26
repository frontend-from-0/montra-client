import { Box, Container } from '@mui/material';
import { HalfTypeNavigation } from '../../shared-components/Navigation/TopNavigation/HalfTypeNavigation';
import { colors } from 'src/styles/colors';
import { ListItemSelect } from '../../shared-components/Card/ListItems/ListItemSelect';
import {
  UserActionType,
  useUser,
  useUserDispatch,
} from 'src/context/UserContext';
import { Theme } from '../../context/UserContext';

export const ThemePage = () => {
  const { theme } = useUser() || {};

  const dispatch = useUserDispatch();

  const handleSelectedTheme = (theme: Theme) => {
    dispatch?.({
      type: UserActionType.SET_THEME,
      payload: theme,
    });
  };

  return (
    <Container>
      <HalfTypeNavigation title='Theme' color={colors.dark[100]} />
      <Box sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)', mt: -1 }} />
      {Object.values(Theme).map((thm) => (
        <ListItemSelect
          key={thm}
          title={thm}
          isSelected={theme === thm}
          setIsSelected={() => handleSelectedTheme(thm)}
        />
      ))}
    </Container>
  );
};
