import { Typography } from '@mui/material';

interface Title2Props {
  children: string | JSX.Element;
}

export const Title2 = ({ children }: Title2Props) => {
  return (
    <Typography
      variant='h5'
      sx={{
        textAlign: 'center',
        fontWeight: '600',
        margin: (theme) => theme.spacing(2),
      }}
    >
      {children}
    </Typography>
  );
};
