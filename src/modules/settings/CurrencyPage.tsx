import { Container, List, ListItem } from '@mui/material';
import { HalfTypeNavigation } from '../../shared-components/Navigation/TopNavigation/HalfTypeNavigation';
import { colors } from 'src/styles/colors';
import { Currency } from 'src/types/Currency';
import { ListItemSelect } from '../../shared-components/Card/ListItems/ListItemSelect';
import { useState } from 'react';
import { useUserDispatch } from 'src/context/UserContext';
import { UserActionType } from '../../context/UserContext';

export const CurrencyPage = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency | null>(
    null,
  );

  const dispatch = useUserDispatch();

  const handleSelectedCurrency = (currency: Currency) => {
    setSelectedCurrency(currency);
    dispatch?.({
      type: UserActionType.SET_CURRENCY,
      payload: currency,
    });
  };

  return (
    <Container>
      <HalfTypeNavigation title='Currency' color={colors.dark[100]} />
      <List>
        {Object.values(Currency).map((cur) => (
          <ListItemSelect
            key={cur}
            title={cur}
            isSelected={selectedCurrency === cur}
            setIsSelected={() => handleSelectedCurrency(cur)}
          />
        ))}
      </List>
    </Container>
  );
};
