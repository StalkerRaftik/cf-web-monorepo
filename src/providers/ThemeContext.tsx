import React, { createContext, useContext, useState } from "react";
import { ThemeMode } from "@/themes/constants";

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<ThemeMode>(ThemeMode.DARK);

  const toggleTheme = () => {
    setMode((prevMode) =>
      prevMode === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK
    );
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
