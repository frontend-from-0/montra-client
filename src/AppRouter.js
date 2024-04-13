import { Expense } from './modules/expense/Expense';
import { Routes, Route, Link } from 'react-router-dom';
import { Introduction } from './modules/onboarding/introduction';

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
      <Route
        path='/'
        element={<Link to='/expense/new'>Add new expense</Link>}
      />
    </Routes>
  );
};
