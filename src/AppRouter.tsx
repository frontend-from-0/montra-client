import { Expense } from './modules/expense/Expense';
import { Routes, Route, Link } from 'react-router-dom';
import { Introduction } from './modules/onboarding/introduction';
import { BottomNavigation } from './shared-components/BottomNavigation';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Profile } from './modules/profile/Profile';

const StyledPageContentDiv = styled('div')({
  overflow: 'auto',
  maxHeight: 'calc(100vh - 70px)',
});

const StyledBottomNavigationContainer = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
});
export const AppRouter = () => {
  return (
    <Routes>
      <Route path='onboarding'>
        <Route path='introduction' element={<Introduction />} />
        <Route path='sign-up' element={<div>Sign Up Page</div>} />
        <Route
          path='sign-up/verification'
          element={<div>Sign Up Verification</div>}
        />
        <Route path='login'>
          <Route
            path='forgot-password'
            element={<div>Login forgot Passsword</div>}
          />
          <Route
            path='forgot-password/success'
            element={<div>Sign Up Verification</div>}
          />
          <Route
            path='reset-password'
            element={<div>Reset Password Page</div>}
          />
          <Route index element={<div>Login Page</div>} />
        </Route>
        <Route path='setup'>
          <Route path='account' element={<div>account</div>} />
          <Route path='add-new-account' element={<div>add-new-account</div>} />
          <Route path='success' element={<div>success</div>} />
          <Route index element={<div>pin</div>} />
        </Route>
        <Route index element={<div>Launch screen</div>} />
      </Route>
      <Route path='/expense'>
        <Route path='new' element={<Expense />} />

        <Route index element={<div>Launch screen</div>} />
      </Route>
      {/* Links displayed on the main page are for convinience during development process since real navigation is not yet implemented in the application. */}
      <Route
        path='/'
        element={
          <Stack
            justifyContent='space-between'
            sx={{ minHeight: '100vh', position: 'relative' }}
          >
            <StyledPageContentDiv>
              <div>
                <Link to='/onboarding/introduction'>
                  Onboarding introduction
                </Link>
              </div>
              <div>
                <Link to='/expense/new'>Add new expense</Link>
              </div>
            </StyledPageContentDiv>
            <StyledBottomNavigationContainer>
              <BottomNavigation />
            </StyledBottomNavigationContainer>
          </Stack>
        }
      />
      <Route
        path='/profile'
        element={
          <Stack
            justifyContent='space-between'
            sx={{ minHeight: '100vh', position: 'relative' }}
          >
            <Profile />
            <BottomNavigation />
          </Stack>
        }
      />
    </Routes>
  );
};
