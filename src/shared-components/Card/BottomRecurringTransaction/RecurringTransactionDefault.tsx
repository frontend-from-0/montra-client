import { IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import { colors } from 'src/styles/colors';
import { theme } from 'src/styles/theme';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface RecurringTransactionDefaultProps {
  title: string;
}

export const RecurringTransactionDefault = ({
  title,
}: RecurringTransactionDefaultProps) => {
  return (
    <Stack
      sx={{
        border: `${theme.spacing(0.25)} solid ${colors.light[20]}`,
        margin: theme.spacing(3),
        borderRadius: theme.spacing(4),
        padding: theme.spacing(2),
        color: colors.dark[25],
      }}
      direction='row'
      justifyContent='space-between'
      alignItems='center'
    >
      <Typography>{title}</Typography>
      <IconButton>
        <ExpandMoreIcon sx={{ fontSize: 32, color: colors.dark[25] }} />
      </IconButton>
    </Stack>
  );
};
