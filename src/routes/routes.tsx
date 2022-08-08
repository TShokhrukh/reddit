import React from 'react';
import { MainPage } from 'pages';
import { Routes, Route } from 'react-router-dom';
import { LoginPage } from 'pages/login';

export function ThemeRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
      <Route path="*" element={'404'} />
    </Routes>
  );
}
