import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  direction: 'ltr',
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1266,
      xl: 1536
    }
  },
  palette: {
    mode: 'light',
    background: {
      paper: '#ffffff',
      default: '#e3f2fd'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});
