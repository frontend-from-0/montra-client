import { Typography } from '@mui/material';

interface Regular2Props {
  children: string | JSX.Element;
  color: string;
}

export const Regular2 = ({ children, color }: Regular2Props) => {
  return (
    <Typography variant='body2' color={color} fontSize='16px'>
      {children}
    </Typography>
  );
};
