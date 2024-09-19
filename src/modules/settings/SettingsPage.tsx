import { Box, Container } from '@mui/material';
import { ListItemSetting } from '../../shared-components/Card/ListItems/ListItemSetting';
import { HalfTypeNavigation } from '../../shared-components/Navigation/TopNavigation/HalfTypeNavigation';
import { colors } from 'src/styles/colors';
import { useUser } from 'src/context/UserContext';
import { Link, Outlet } from 'react-router-dom';
import { title } from 'process';

export const SettingsPage = () => {
  const user = useUser();

  const SettingPageItems = [
    { title: 'Currency', description: user?.currency },
    { title: 'Language', description: user?.language },
    { title: 'Theme', description: user?.theme },
    { title: 'Security', description: user?.security },
    { title: 'Notification', description: '' },
    { title: 'About', description: '' },
    { title: 'Help', description: '' },
  ];

  return (
    <Container>
      <HalfTypeNavigation title='Settings' color={colors.dark[100]} />
      {SettingPageItems.map((item, index) => (
        <Link
          to={`/settings/${item.title.toLowerCase()}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Box mb={index === 4 ? 10 : 0} key={item.title}>
            <ListItemSetting
              title={item.title}
              description={item.description || ''}
            />
          </Box>
        </Link>
      ))}
    </Container>
  );
};
