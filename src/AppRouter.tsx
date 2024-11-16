import { Expense } from './modules/expense/Expense';
import { Routes, Route } from 'react-router-dom';
import { Introduction } from './modules/onboarding/introduction';
import { Home } from './modules/homepage/index';
import { SettingsPage } from './modules/settings/SettingsPage';
import { CurrencyPage } from './modules/settings/CurrencyPage';
import { LanguagePage } from './modules/settings/LanguagePage';
import { NotificationPage } from './modules/settings/NotificationPage';
import { SecurityPage } from './modules/settings/SecurityPage';
import { ThemePage } from './modules/settings/ThemePage';
import { Transaction } from './modules/transaction/transaction';
import { Budget } from './modules/budget/Budget';
import { Profile } from './modules/profile/Profile';

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
      <Route path='/profile' element={<Profile />} />
      <Route path='/profile/settings' element={<SettingsPage />} />
      <Route path='/profile/settings/currency' element={<CurrencyPage />} />
      <Route path='/profile/settings/language' element={<LanguagePage />} />
      <Route
        path='/profile/settings/notification'
        element={<NotificationPage />}
      />
      <Route path='/profile/settings/security' element={<SecurityPage />} />
      <Route path='/profile/settings/theme' element={<ThemePage />} />

      <Route path='/transaction' element={<Transaction />} />
      <Route path='/budget' element={<Budget />} />
      <Route path='/profile' element={<Profile />} />
      {/* Links displayed on the main page are for convinience during development process since real navigation is not yet implemented in the application. */}
      <Route path='/' element={<Home />} />
    </Routes>
  );
};
