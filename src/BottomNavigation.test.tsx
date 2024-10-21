import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { BottomNavigation } from './shared-components/BottomNavigation/index';
import { AppProvider } from './context/AppContext';
import { AppRouter } from './AppRouter';

test('BottomNavigation should navigate to correct routes', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <AppProvider>
        <BottomNavigation />
        <AppRouter />
      </AppProvider>
    </MemoryRouter>,
  );

  userEvent.click(screen.getAllByText(/Home/i)[0]);
  expect(screen.getAllByText(/Home/i)[0]).toBeInTheDocument();

  userEvent.click(screen.getAllByText(/Transaction/i)[0]);
  expect(screen.getByText(/See your financial report/i)).toBeInTheDocument();

  userEvent.click(screen.getAllByText(/Budget/i)[0]);
  expect(screen.getByText(/CREATE A BUDGET/i)).toBeInTheDocument();

  userEvent.click(screen.getAllByText(/Profile/i)[0]);
  expect(screen.getByText(/Username/i)).toBeInTheDocument();
});
