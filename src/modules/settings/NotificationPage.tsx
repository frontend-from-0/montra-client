import { Box, Container } from '@mui/material';
import { HalfTypeNavigation } from '../../shared-components/Navigation/TopNavigation/HalfTypeNavigation';
import { colors } from 'src/styles/colors';
import { ListItemSwitch } from '../../shared-components/Card/ListItems/ListItemSwitch';
import {
  UserActionType,
  useUser,
  useUserDispatch,
  UserState,
} from 'src/context/UserContext';

export const NotificationPage = () => {
  const user = useUser();
  const dispatch = useUserDispatch();

  const NotificationPageItems = [
    {
      title: 'Expense Alert',
      description: "Get notification about you're expense",
      key: 'expenseAlert' as const,
    },
    {
      title: 'Budget',
      description: "Get notification when you're budget exceeding the limit",
      key: 'budget' as const,
    },
    {
      title: 'Tips & Articles',
      description: 'Small & usefull pieces of pratical financial advice',
      key: 'tipsArticle' as const,
    },
  ];

  const handleToggle = (key: keyof UserState['notificationSettings']) => {
    dispatch?.({
      type: UserActionType.TOGGLE_NOTIFICATION,
      payload: key,
    });
  };
  return (
    <Container>
      <HalfTypeNavigation title='Notification' color={colors.dark[100]} />
      <Box sx={{ borderTop: '1px solid rgba(0, 0, 0, 0.1)', mt: -1 }} />
      {Object.values(NotificationPageItems).map((item) => (
        <ListItemSwitch
          title={item.title}
          description={item.description}
          isOn={user?.notificationSettings[item.key] ?? false}
          onToggle={() => handleToggle(item.key)}
        />
      ))}
    </Container>
  );
};
