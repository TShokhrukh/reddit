import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeRoutes } from 'routes';

export function App() {
  return (
    <BrowserRouter>
      <ThemeRoutes />
    </BrowserRouter>
  );
}
