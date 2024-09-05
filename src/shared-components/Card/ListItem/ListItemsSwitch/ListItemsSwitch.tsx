import { Switch } from '@mui/material';
import { GenericListItems } from '../GenericListItems';

export const ListItemsSwitch = ({
  title,
  description,
  isOn,
  onToggle,
}: {
  title: string;
  description: string;
  isOn: boolean;
  onToggle: () => void;
}) => {
  return (
    <GenericListItems
      title={title}
      description={description}
      secondaryAction={<Switch checked={isOn} onChange={onToggle} />}
    />
  );
};
