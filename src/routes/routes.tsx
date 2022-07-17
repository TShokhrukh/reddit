import React from 'react';
import { MainPage } from 'pages';
import { Routes, Route } from 'react-router-dom';

export function ThemeRoutes() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainPage />} />
        <Route path="login" element={'login'} />
      </Route>
      <Route path="*" element={'404'} />
    </Routes>
  );
}
