import { Typography, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';

interface Regular1Props {
  children: string | JSX.Element;
  style?: React.CSSProperties;
  sx?: SxProps<Theme>;
  id?: string;
}

export const Regular1 = ({ children, style = {}, sx, id }: Regular1Props) => {
  return (
    <Typography id={id} style={style} variant='body1' sx={sx}>
      {children}
    </Typography>
  );
};
