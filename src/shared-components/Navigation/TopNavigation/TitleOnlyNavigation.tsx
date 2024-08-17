import { Typography } from '@mui/material';

interface TitleOnlyNavigationProps {
  text: string;
}

export const TitleOnlyNavigation = ({ text }: TitleOnlyNavigationProps) => {
  return <Typography textAlign='center'>{text}</Typography>;
};
