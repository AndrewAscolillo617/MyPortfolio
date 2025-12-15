"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "./themeContext";
import LayoutStyle from "./layoutstyling";

export default function RootLayoutClient({ children, initialTheme }) {
  return (
    <ThemeProvider initialTheme={initialTheme}>
      <LayoutStyle>{children}</LayoutStyle>
    </ThemeProvider>
  );
}
