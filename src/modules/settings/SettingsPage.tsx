import { Container, List } from '@mui/material';
import { ListItemSetting } from '../../shared-components/Card/ListItems/ListItemSetting';
import { HalfTypeNavigation } from '../../shared-components/Navigation/TopNavigation/HalfTypeNavigation';
import { colors } from 'src/styles/colors';
import { useUser } from 'src/context/UserContext';
import { Link } from 'react-router-dom';

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
      <List>
        {SettingPageItems.map((item) => (
          <Link
            key={item.title}
            to={`/settings/${item.title.toLowerCase()}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ListItemSetting
              title={item.title}
              description={item.description || ''}
            />
          </Link>
        ))}
      </List>
    </Container>
  );
};
