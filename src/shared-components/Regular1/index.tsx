import { Typography } from '@mui/material';
interface Regular1Props {
  children: string | JSX.Element;
}

export const Regular1 = ({ children }: Regular1Props) => {
  return (
    <Typography variant='body1' sx={{ opacity: '50%', textAlign: 'center' }}>
      {children}
    </Typography>
  );
};
