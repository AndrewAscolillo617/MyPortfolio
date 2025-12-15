"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Theme = "light" | "dark"; //Union type, theme can only be 'light' or dark'

interface ThemeContextType {
  //define shape of context value. Any component using this context knows exactly what it is getting.
  theme: Theme;
  toggleTheme: (newTheme: Theme) => void;
}

//<--  createContext<ThemeContextType | undefined>
// The above means the context will contain a valid theme object or be undefined (before the provider wraps the app)
const ThemeContext = createContext<ThemeContextType | undefined>(undefined); //actual ThemeContext Object

//This function expects an object with one property called children, and children must be a ReactNode which means anything under React can enter

export const ThemeProvider = ({
  children,
  initialTheme,
}: {
  children: ReactNode;
  initialTheme: Theme;
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    document.cookie = `theme=${newTheme}; path=/`; // sync back to cookie
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  console.log("useTheme triggered.");
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
