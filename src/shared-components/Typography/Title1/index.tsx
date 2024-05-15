import { Typography, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';

interface Title1Props {
  children: string | JSX.Element;
  style?: React.CSSProperties;
  sx?: SxProps<Theme>;
}

export const Title1 = ({ children, style = {}, sx }: Title1Props) => {
  return (
    <Typography style={style} variant='h2' sx={sx}>
      {children}
    </Typography>
  );
};
