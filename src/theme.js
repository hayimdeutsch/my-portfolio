import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a192f',
      light: '#112240',
      dark: '#020c1b',
    },
    secondary: {
      main: '#5acfb8',
      light: '#8fffe4',
      dark: '#12a28b',
    },
    tertiary: {
      main: '#8892b0',
      light: '#a8b2d1',
      dark: '#4b5878',
    },
    background: {
      default: '#0a192f',
      primary: '#64ffda',
      secondary: '#0a2d4d', 
      paper: '#112240',
    },
    text: {
      primary: '#cccccc',
      secondary: '#5acfb8',
      tertiary: "#12a28b",
      disabled: '#8892b0',
    },
  },
  typography: {
    fontFamily: 'Tomorrow, Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    body2: {
      fontSize: '0.825rem',
      fontWeight: 400,
    },
    body3:{
      fontSize: '-.75rem',
      fontWeight: 300,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 700,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#112240',
          color: '#dddddd',
        },
      },
    },
  },
});

export default theme;