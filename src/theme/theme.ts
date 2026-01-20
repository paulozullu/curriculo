import { createTheme } from '@mui/material/styles';
import type { ThemeOptions } from '@mui/material/styles';

const baseTheme: ThemeOptions = {
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
};

const pastelBlue = {
  50: '#E3F2FD',
  100: '#BBDEFB',
  200: '#90CAF9',
  300: '#64B5F6',
  400: '#42A5F5',
  500: '#5C9CE5',
  600: '#4A8BD4',
  700: '#3B7AC3',
  800: '#2C69B2',
  900: '#1D58A1',
};

export const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'light',
    primary: {
      main: pastelBlue[500],
      light: pastelBlue[300],
      dark: pastelBlue[700],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#7E9BBF',
      light: '#A8BDD9',
      dark: '#5A7A9F',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#F5F9FC',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#2C3E50',
      secondary: '#5A6C7D',
    },
    divider: 'rgba(92, 156, 229, 0.12)',
  },
});

export const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: 'dark',
    primary: {
      main: pastelBlue[400],
      light: pastelBlue[200],
      dark: pastelBlue[600],
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8FABC9',
      light: '#B5CBE0',
      dark: '#6A8BB2',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#0D1B2A',
      paper: '#1B2838',
    },
    text: {
      primary: '#E8F0F7',
      secondary: '#A8BDD1',
    },
    divider: 'rgba(92, 156, 229, 0.2)',
  },
});
