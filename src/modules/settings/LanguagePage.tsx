import { Box, Container, List } from '@mui/material';
import { HalfTypeNavigation } from '../../shared-components/Navigation/TopNavigation/HalfTypeNavigation';
import { colors } from 'src/styles/colors';
import { Language } from 'src/types/Language';
import { ListItemSelect } from '../../shared-components/Card/ListItems/ListItemSelect';
import { useState } from 'react';
import { useUser, useUserDispatch } from 'src/context/UserContext';
import { UserActionType } from '../../context/UserContext';

export const LanguagePage = () => {
  const { language } = useUser() || {};

  const dispatch = useUserDispatch();

  const handleSelectedLanguage = (language: Language) => {
    dispatch?.({
      type: UserActionType.SET_LANGUAGE,
      payload: language,
    });
  };

  return (
    <Container>
      <HalfTypeNavigation title='Language' color={colors.dark[100]} />
      <Box sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)', mt: -1 }} />
      <List>
        {Object.values(Language).map((lan) => (
          <ListItemSelect
            key={lan}
            title={lan}
            isSelected={language === lan}
            setIsSelected={() => handleSelectedLanguage(lan)}
          />
        ))}
      </List>
    </Container>
  );
};
