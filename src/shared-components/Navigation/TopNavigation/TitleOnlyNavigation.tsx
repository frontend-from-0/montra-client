import { Typography } from '@mui/material';

interface TitleOnlyNavigationProps {
  title: string;
}

export const TitleOnlyNavigation = ({ title }: TitleOnlyNavigationProps) => {
  return <Typography textAlign='center'>{title}</Typography>;
};
