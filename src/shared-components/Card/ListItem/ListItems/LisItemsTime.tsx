import { Typography } from '@mui/material';
import { colors } from 'src/styles/colors';
import { formatTime } from 'src/utils/timeUtils';
import { GenericListItems } from '../GenericListItems';

export const ListItemsTime = ({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string | Date;
}) => {
  const formattedTime = formatTime(time);
  return (
    <GenericListItems
      title={title}
      description={description}
      secondaryAction={
        <Typography color={colors.dark[25]}>{formattedTime}</Typography>
      }
    />
  );
};
