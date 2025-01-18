import { ThemeProvider as MuiThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import React from 'react';
import { ruRU, enUS } from '@mui/material/locale';
import { useThemeContext } from '@/providers/ThemeContext';

type Props = {
  children?: React.ReactNode;
};

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  const { mode } = useThemeContext();

  const theme = responsiveFontSizes(
    createTheme(
      {
        palette: {
          mode,
          primary: {
            main: mode === 'dark' ? '#B9A6E3' : '#735DA5',
            light: mode === 'dark' ? '#CAB9ED' : '#8B75B9',
            dark: mode === 'dark' ? '#A590D6' : '#5B4A84',
          },
          secondary: {
            main: mode === 'dark' ? '#735DA5' : '#D3C5E5',
          },
          text: {
            primary: mode === 'dark' ? '#E8E6ED' : '#2D2535',
            secondary: mode === 'dark' ? '#B8B5C0' : '#584D63',
          },
          background: {
            default: mode === 'dark' ? '#1A1721' : '#F8F6FB',
            paper: mode === 'dark' ? '#241F2D' : '#FFFFFF',
          },
        },
        typography: {
          fontFamily: 'Inter, sans-serif',
          h1: {
            color: '#735DA5',
            fontWeight: 700,
          },
          h2: {
            color: '#735DA5',
            fontWeight: 600,
          },
          h3: {
            color: mode === 'dark' ? '#D3C5E5' : '#735DA5',
            fontWeight: 600,
          },
          h4: {
            color: mode === 'dark' ? '#D3C5E5' : '#735DA5',
            fontWeight: 500,
          },
          h5: {
            color: mode === 'dark' ? '#D3C5E5' : '#735DA5',
            fontWeight: 500,
          },
          h6: {
            color: mode === 'dark' ? '#D3C5E5' : '#735DA5',
            fontWeight: 500,
          },
        },
        components: {
          MuiLink: {
            styleOverrides: {
              root: {
                textDecoration: 'none',
                '&:hover': {
                  opacity: 0.8,
                },
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: mode === 'dark' ? '#A590D6' : '#735DA5',
                  opacity: 0.5,
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: mode === 'dark' ? '#B9A6E3' : '#735DA5',
                  opacity: 0.8,
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: mode === 'dark' ? '#B9A6E3' : '#735DA5',
                  opacity: 1,
                },
              },
            },
          },
          MuiInputLabel: {
            styleOverrides: {
              root: {
                color: mode === 'dark' ? '#B9A6E3' : '#735DA5',
                opacity: 0.7,
                '&.Mui-focused': {
                  color: mode === 'dark' ? '#B9A6E3' : '#735DA5',
                  opacity: 1,
                },
              },
            },
          },
        },
      },
      {
        ruRU,
        enUS,
      },
    ),
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
