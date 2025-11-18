import { ReactNode } from "react";
import { ThemeProvider } from "./themeContext";
import LayoutStyle from "./layoutstyling";
import { useTheme } from "./themeContext";

const RootLayout = ({ children }: { children: ReactNode }) => {
  //{ children }: this is a prop that represents whatever page or component is being rendered in the current route segment

  return (
    <html>
      <body style={{ padding: 0, margin: 0 }}>
        <ThemeProvider>
          <LayoutStyle>{children}</LayoutStyle>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
