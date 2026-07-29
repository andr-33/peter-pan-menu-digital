import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4caf50',
      light: '#81c784',
      dark: '#388e3c',
    },
    secondary: {
      main: '#ffb300',
    },
    background: {
      default: '#121212', // Fondo oscuro moderno
      paper: '#1e1e1e', // Tarjetas ligeramente más claras
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontSize: '1rem',
          fontWeight: 600,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e1e1e',
          marginBottom: '8px',
          '&:before': {
            display: 'none',
          },
          borderRadius: '8px !important',
        },
      },
    },
  },
});
