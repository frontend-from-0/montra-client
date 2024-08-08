import { Stack, Typography } from '@mui/material';
import { Regular3 } from '../../Typography/Regular3';
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
      direction='row'
      overflow='auto'
      justifyContent='space-between'
      sx={{ margin: `${theme.spacing(1)} ${theme.spacing(2)}` }}
    >
      {['Today', 'Week', 'Month', 'Year'].map((tabName) => (
        <div
          key={tabName}
          onClick={() => handleTabClick(tabName)}
          style={{
            fontWeight: 500,
            lineHeight: '18px',
            textAlign: 'center',
            padding: `${theme.spacing(2)} ${theme.spacing(6)}`,
            borderRadius: theme.shape.borderRadius * 4,
            backgroundColor: activeTab === tabName ? colors.yellow[20] : '',
          }}
        >
          <Regular3
            color={activeTab === tabName ? colors.yellow[100] : colors.dark[25]}
          >
            {tabName}
          </Regular3>
        </div>
      ))}
    </Stack>
  );
};
