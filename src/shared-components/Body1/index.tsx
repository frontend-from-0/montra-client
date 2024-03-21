import { Typography } from '@mui/material';

interface Body1Props {
  children: string | JSX.Element;
}

export const Body1 = ({ children }: Body1Props) => {
  return <Typography variant='body1'>{children}</Typography>;
};
