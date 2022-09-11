import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { ThemeRoutes } from 'routes';
import { theme } from 'theme';
import { CssBaseline } from '@mui/material';
import { LocalProvider } from 'modules/local';
import * as lang from './resources/lang';

export function App() { 
  return (
    <LocalProvider lang='ru' messages={lang.ru}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <ThemeRoutes />
        </ThemeProvider>
      </BrowserRouter>
    </LocalProvider>
  );
}
