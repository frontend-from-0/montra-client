import { Typography } from '@mui/material';

interface Regular3Props {
  children: string | JSX.Element;
  color: string;
}

export const Regular3 = ({ children, color }: Regular3Props) => {
  return (
    <Typography variant='body2' fontSize='14px' color={color}>
      {children}
    </Typography>
  );
};
