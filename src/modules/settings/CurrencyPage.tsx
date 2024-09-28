import { Box, Container, List, ListItem } from '@mui/material';
import { HalfTypeNavigation } from '../../shared-components/Navigation/TopNavigation/HalfTypeNavigation';
import { colors } from 'src/styles/colors';
import { Currency } from 'src/types/Currency';
import { ListItemSelect } from '../../shared-components/Card/ListItems/ListItemSelect';
import { useState } from 'react';
import { useUser, useUserDispatch } from 'src/context/UserContext';
import { UserActionType } from '../../context/UserContext';

export const CurrencyPage = () => {
  const { currency } = useUser() || {};

  const dispatch = useUserDispatch();

  const handleSelectedCurrency = (currency: Currency) => {
    dispatch?.({
      type: UserActionType.SET_CURRENCY,
      payload: currency,
    });
  };

  return (
    <Container>
      <HalfTypeNavigation title='Currency' color={colors.dark[100]} />
      <Box sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)', mt: -1 }} />
      <List>
        {Object.values(Currency).map((cur) => (
          <ListItemSelect
            key={cur}
            title={cur}
            isSelected={currency === cur}
            setIsSelected={() => handleSelectedCurrency(cur)}
          />
        ))}
      </List>
    </Container>
  );
};
