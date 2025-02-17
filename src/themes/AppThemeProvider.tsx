import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import React from "react";
import { ruRU, enUS } from "@mui/material/locale";
import { useThemeContext } from "@/providers/ThemeContext";
import { ThemeMode } from "./constants";

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
            main: mode === ThemeMode.DARK ? "#B9A6E3" : "#735DA5",
            light: mode === ThemeMode.DARK ? "#CAB9ED" : "#8B75B9",
            dark: mode === ThemeMode.DARK ? "#A590D6" : "#5B4A84",
          },
          secondary: {
            main: mode === ThemeMode.DARK ? "#735DA5" : "#D3C5E5",
          },
          text: {
            primary: mode === ThemeMode.DARK ? "#E8E6ED" : "#2D2535",
            secondary: mode === ThemeMode.DARK ? "#B8B5C0" : "#584D63",
          },
          background: {
            default: mode === ThemeMode.DARK ? "#1A1721" : "#F8F6FB",
            paper: mode === ThemeMode.DARK ? "#241F2D" : "#FFFFFF",
          },
        },
        typography: {
          fontFamily: "Inter, sans-serif",
          h1: {
            color: "#735DA5",
            fontWeight: 700,
          },
          h2: {
            color: "#735DA5",
            fontWeight: 600,
          },
          h3: {
            color: mode === ThemeMode.DARK ? "#D3C5E5" : "#735DA5",
            fontWeight: 600,
          },
          h4: {
            color: mode === ThemeMode.DARK ? "#D3C5E5" : "#735DA5",
            fontWeight: 500,
          },
          h5: {
            color: mode === ThemeMode.DARK ? "#D3C5E5" : "#735DA5",
            fontWeight: 500,
          },
          h6: {
            color: mode === ThemeMode.DARK ? "#D3C5E5" : "#735DA5",
            fontWeight: 500,
          },
        },
        components: {
          MuiLink: {
            styleOverrides: {
              root: {
                textDecoration: "none",
                "&:hover": {
                  opacity: 0.8,
                },
              },
            },
          },
          MuiOutlinedInput: {
            styleOverrides: {
              root: {
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: mode === ThemeMode.DARK ? "#A590D6" : "#735DA5",
                  opacity: 0.5,
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: mode === ThemeMode.DARK ? "#B9A6E3" : "#735DA5",
                  opacity: 0.8,
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: mode === ThemeMode.DARK ? "#B9A6E3" : "#735DA5",
                  opacity: 1,
                },
              },
            },
          },
          MuiInputLabel: {
            styleOverrides: {
              root: {
                color: mode === ThemeMode.DARK ? "#B9A6E3" : "#735DA5",
                opacity: 0.7,
                "&.Mui-focused": {
                  color: mode === ThemeMode.DARK ? "#B9A6E3" : "#735DA5",
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
      }
    )
  );

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
