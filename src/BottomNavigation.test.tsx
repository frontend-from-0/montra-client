import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { BottomNavigation } from './shared-components/BottomNavigation/index';
import { AppProvider } from './context/AppContext';

test('BottomNavigation should navigate to correct routes', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <AppProvider>
        <BottomNavigation />
      </AppProvider>
    </MemoryRouter>,
  );

  userEvent.click(screen.getByText(/Home/i));
  expect(window.location.pathname).toBe('/');

  userEvent.click(screen.getByText(/Transaction/i));
  expect(window.location.pathname).toBe('/transaction');

  userEvent.click(screen.getByText(/Budget/i));
  expect(window.location.pathname).toBe('/budget');

  userEvent.click(screen.getByText(/Profile/i));
  expect(window.location.pathname).toBe('/profile');
});
