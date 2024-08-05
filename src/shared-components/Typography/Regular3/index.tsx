import { Typography, SxProps } from '@mui/material';

interface Regular3Props {
  children: string | JSX.Element;
  style?: React.CSSProperties;
}

export const Regular3 = ({ children, style = {} }: Regular3Props) => {
  return (
    <Typography fontSize='14px' variant='body2' style={style}>
      {children}
    </Typography>
  );
};
