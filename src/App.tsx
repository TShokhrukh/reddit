import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { ThemeRoutes } from 'routes';
import { theme } from 'theme';
import { CssBaseline } from '@mui/material';

export function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ThemeRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}
