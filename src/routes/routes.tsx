import React from 'react';
import { MainPage } from 'pages';
import { Routes, Route } from 'react-router';
import { LoginPage } from 'pages/login';
import { WithLogin } from 'components/WithLogin';

export function ThemeRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<WithLogin><MainPage /></WithLogin>} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={'404'} />
    </Routes>
  );
}
