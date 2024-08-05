import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { colors } from 'src/styles/colors';
import { theme } from 'src/styles/theme';

export const TimePeriodTabs = () => {
  const [activeTab, setActiveTab] = useState('Today');

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <Stack
      display='flex'
      flexDirection='row'
      overflow='auto'
      justifyContent='space-between'
      margin='5px 10px'
    >
      {['Today', 'Week', 'Month', 'Year'].map((tabName) => (
        <Typography
          key={tabName}
          onClick={() => handleTabClick(tabName)}
          sx={{
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '18px',
            textAlign: 'center',
            padding: '8px 24px',
            borderRadius: theme.shape.borderRadius * 4,
            color: activeTab === tabName ? colors.yellow[100] : colors.dark[25],
            backgroundColor: activeTab === tabName ? '#FCEED4' : '',
            '&:hover': {
              backgroundColor: colors.yellow[20],
            },
            whiteSpace: 'nowrap',
          }}
        >
          {tabName}
        </Typography>
      ))}
    </Stack>
  );
};
