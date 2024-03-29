import React, { lazy } from 'react';
import { Routes, Route } from 'react-router';
import { WithLogin } from 'components/WithLogin';
import { Loadable } from 'components/Loadable';

const LoginPage = Loadable(lazy(() => import('pages/login').then(c => ({ default: c.LoginPage }))));
const MainPage = Loadable(lazy(() => import('pages/main').then(c => ({ default: c.MainPage }))));
const AuthPage = Loadable(lazy(() => import('pages/auth').then(c => ({ default: c.AuthPage }))));

export function ThemeRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<WithLogin><MainPage /></WithLogin>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="auth" element={<AuthPage />} />
      </Route>
      <Route path="*" element={'404'} />
    </Routes>
  );
}
