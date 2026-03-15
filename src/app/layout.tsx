import { ReactNode } from "react";
import { ThemeProvider } from "./themeContext";
import LayoutStyle from "./layoutstyling";
import { useTheme } from "./themeContext";
import { cookies } from "next/headers";
import RootLayoutClient from "./rootLayoutClient";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  //{ children }: this is a prop that represents whatever page or component is being rendered in the current route segment
  type Theme = "light" | "dark";
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "light";

  return (
    <html data-theme={theme} suppressHydrationWarning>
      <body style={{ padding: 0, margin: 0 }}>
        <ThemeProvider initialTheme={theme as Theme}>
          <LayoutStyle>{children}</LayoutStyle>
        </ThemeProvider>
      </body>
    </html>
  );
}
// data=theme, theme, initial theme, themeprovider
