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
      <Route path='settings' element={<SettingsPage />}>
        <Route path='currency' element={<CurrencyPage />} />
        <Route path='language' element={<LanguagePage />} />
        <Route path='notification' element={<NotificationPage />} />
        <Route path='security' element={<SecurityPage />} />
        <Route path='theme' element={<ThemePage />} />
      </Route>
      {/* Links displayed on the main page are for convinience during development process since real navigation is not yet implemented in the application. */}
      <Route path='/' element={<Home />} />
    </Routes>
  );
};
