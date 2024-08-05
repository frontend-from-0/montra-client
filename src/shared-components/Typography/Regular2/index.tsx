import { Typography } from '@mui/material';

interface Regular2Props {
  children: string | JSX.Element;
  style?: React.CSSProperties;
}

export const Regular2 = ({ children, style = {} }: Regular2Props) => {
  return (
    <Typography variant='body2' style={style}>
      {children}
    </Typography>
  );
};
