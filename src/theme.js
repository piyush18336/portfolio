import { createTheme } from '@mui/material/styles';

export const COLORS = {
  bg: '#050508',
  bgSurface: 'rgba(255,255,255,0.03)',
  bgCard: 'rgba(10, 12, 28, 0.6)',
  primary: '#00d4ff',
  primaryDim: 'rgba(0, 212, 255, 0.15)',
  secondary: '#a855f7',
  secondaryDim: 'rgba(168, 85, 247, 0.15)',
  accent: '#00ff88',
  border: 'rgba(0, 212, 255, 0.1)',
  borderHover: 'rgba(0, 212, 255, 0.4)',
  textPrimary: '#f0f0f0',
  textSecondary: '#8892a4',
  textMuted: '#4a5568',
};

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: COLORS.primary },
    secondary: { main: COLORS.secondary },
    background: {
      default: COLORS.bg,
      paper: COLORS.bgCard,
    },
    text: {
      primary: COLORS.textPrimary,
      secondary: COLORS.textSecondary,
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
    h1: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h2: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h4: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 500 },
    h6: { fontFamily: '"Space Grotesk", sans-serif', fontWeight: 500 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: COLORS.bg,
          overflowX: 'hidden',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: '"Space Grotesk", sans-serif',
          fontWeight: 500,
          borderRadius: 12,
          letterSpacing: '0.02em',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '0.72rem',
          borderRadius: 8,
        },
      },
    },
  },
});
