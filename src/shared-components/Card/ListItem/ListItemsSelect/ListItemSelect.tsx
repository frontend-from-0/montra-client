import { Checkbox } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { GenericListItems } from '../GenericListItems';
import { useState } from 'react';

export const ListItemSelect = ({
  title,
  defaultSelected = true,
}: {
  title: string;
  defaultSelected?: boolean;
}) => {
  const [isSelected, setIsSelected] = useState(defaultSelected);

  const handleSelectChange = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <GenericListItems
      title={title}
      secondaryAction={
        isSelected ? (
          <Checkbox
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon />}
            checked={isSelected}
            onChange={handleSelectChange}
          />
        ) : null
      }
    />
  );
};
