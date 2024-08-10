import Typography from '@mui/material/Typography';

interface Title3Props {
  children: string | JSX.Element;
  color: string;
}

export const Title3 = ({ children, color }: Title3Props) => {
  return (
    <Typography
      color={color}
      sx={{ fontWeight: '600', fontSize: '18px', lineHeight: '22px' }}
    >
      {children}
    </Typography>
  );
};
