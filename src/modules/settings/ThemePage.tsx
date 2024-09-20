import { Box, Container } from '@mui/material';
import { HalfTypeNavigation } from '../../shared-components/Navigation/TopNavigation/HalfTypeNavigation';
import { colors } from 'src/styles/colors';
import { ListItemSelect } from '../../shared-components/Card/ListItems/ListItemSelect';
import { useState } from 'react';
import { UserActionType, useUserDispatch } from 'src/context/UserContext';
import { Theme } from 'src/types/Theme';

export const ThemePage = () => {
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);

  const dispatch = useUserDispatch();

  const handleSelectedTheme = (theme: Theme) => {
    setSelectedTheme(theme);
    dispatch?.({
      type: UserActionType.SET_THEME,
      payload: theme,
    });
  };

  return (
    <Container>
      <HalfTypeNavigation title='Theme' color={colors.dark[100]} />
      <Box sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)', mt: -1 }} />
      {Object.values(Theme).map((theme) => (
        <ListItemSelect
          key={theme}
          title={theme}
          isSelected={selectedTheme === theme}
          setIsSelected={() => handleSelectedTheme(theme)}
        />
      ))}
    </Container>
  );
};
