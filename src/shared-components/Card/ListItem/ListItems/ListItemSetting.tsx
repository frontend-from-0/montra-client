import { Box } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { colors } from 'src/styles/colors';
import { GenericListItems } from '../GenericListItems';
import { theme } from 'src/styles/theme';

export const ListItemSetting = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Box display='flex' flexDirection='column' gap={theme.spacing(2)}>
      <GenericListItems
        title={title}
        description={description}
        secondaryAction={
          <ChevronRightIcon sx={{ color: colors.violet[100] }} />
        }
      />
    </Box>
  );
};
