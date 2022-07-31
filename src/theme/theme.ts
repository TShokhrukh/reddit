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
  mixins: {
    toolbar: {
      minHeight: 60,
      paddingTop: 8,
      paddingBottom: 8
    }
  },
  palette: {
    mode: 'light',
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      lighter: '#e6f7ff',
      light: '#69c0ff',
      main: '#1890ff',
      dark: '#096dd9',
      darker: '#003a8c',
      contrastText: '#fff'
    },
    secondary: {
      lighter: '#f5f5f5',
      light: '#d9d9d9',
      main: '#8c8c8c',
      dark: '#262626',
      darker: '#000000',
      contrastText: '#ffffff'
    },
    error: {
      lighter: '#fff1f0',
      light: '#ffa39e',
      main: '#ff4d4f',
      dark: '#a8071a',
      darker: '#5c0011',
      contrastText: '#fff'
    },
    warning: {
      lighter: '#fffbe6',
      light: '#ffd666',
      main: '#faad14',
      dark: '#ad6800',
      darker: '#61400',
      contrastText: '#f5f5f5'
    },
    info: {
      lighter: '#e6fffb',
      light: '#5cdbd3',
      main: '#13c2c2',
      dark: '#006d75',
      darker: '#002329',
      contrastText: '#fff'
    },
    success: {
      lighter: '#f6ffed',
      light: '#95de64',
      main: '#52c41a',
      dark: '#237804',
      darker: '#092b00',
      contrastText: '#fff'
    },
    grey: {
      // 0: '#ffffff',
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#f0f0f0',
      300: '#d9d9d9',
      400: '#bfbfbf',
      500: '#8c8c8c',
      600: '#595959',
      700: '#262626',
      800: '#141414',
      900: '#000000',
      A100: '#fafafb',
      A700: '#e6ebf1'
    },
    text: {
      primary: 'grey.700',
      secondary: 'grey.500',
      disabled: 'grey.400'
    },
    action: {
      disabled: 'grey.300',
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    },
    divider: 'grey.200',
    background: {
      paper: '#ffffff',
      default: 'grey.A100'
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});
