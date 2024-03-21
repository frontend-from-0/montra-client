import { Typography } from '@mui/material';

interface Title1Props {
  children: string | JSX.Element;
}

export const Title1 = ({ children }: Title1Props) => {
  return <Typography variant='h2'>{children}</Typography>;
};
