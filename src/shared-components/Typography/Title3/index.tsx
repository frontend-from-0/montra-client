import { styled, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { colors } from 'src/styles/colors';

const StyledDivHeader = styled('div')<{ justify: string }>(
  ({ theme, justify }) => ({
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: justify,
    marginTop: theme.spacing(3),
    fontSize: '18px',
    lineHeight: '21,78px',
    fontWeight: '600',
  }),
);

interface Title3Props {
  children: string | JSX.Element;
  color: string;
  justify?: string;
}

export const Title3 = ({
  children,
  color,
  justify = 'flex-start',
}: Title3Props) => {
  return (
    <StyledDivHeader justify={justify}>
      <Typography color={color}>{children}</Typography>
    </StyledDivHeader>
  );
};
