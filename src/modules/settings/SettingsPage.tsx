import { Box, Container, List } from '@mui/material';
import { ListItemSetting } from '../../shared-components/Card/ListItems/ListItemSetting';
import { HalfTypeNavigation } from '../../shared-components/Navigation/TopNavigation/HalfTypeNavigation';
import { colors } from 'src/styles/colors';
import { useUser } from 'src/context/UserContext';
import { LinkTo } from '../../shared-components/LinkTo';
import { CustomSlider } from '../../shared-components/Form/Control/Slider';

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
      <Box sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)', mt: -1 }} />
      <List>
        {SettingPageItems.map((item) => (
          <LinkTo
            key={item.title}
            to={`/profile/settings/${item.title.toLowerCase()}`}
          >
            <ListItemSetting
              title={item.title}
              description={item.description || ''}
            />
          </LinkTo>
        ))}
      </List>
    </Container>
  );
};
