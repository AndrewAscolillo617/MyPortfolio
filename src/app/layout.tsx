'use client';

import { ThemeProvider } from "./themeContext";
import LayoutStyle from "./layoutstyling";

const RootLayout = ( { children }) => { //{ children }: this is a prop that represents whatever page or component is being rendered in the current route segment
   

  return (                                         
    <ThemeProvider>
      <LayoutStyle children={children}/>
    </ThemeProvider>
  );
};

export default RootLayout;