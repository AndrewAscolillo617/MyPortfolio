
import { useTheme } from "./themeContext";
import GradientBackgroundLight from "../components/GradientBackgroundLight";
import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const LayoutStyle = ( { children })  => {
    const { theme } = useTheme();

    const styles: React.CSSProperties = {
    backgroundColor: theme === "light" ? "#ffffffff" : "#000000ff",
    color: theme === "light" ? "#000" : "#ffffffff",
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: 0, 
    margin: 0,
    
    
  };

  return (
    <html lang="en">
           
            <body style={styles} className={inter.className}>
             
                <div style={{position: 'relative'}}>
                  <GradientBackgroundLight/>
                </div>
                <Navbar/> 
                { children }
               
               
                <div style={{flex: 1, position: 'relative'}}>
                <GradientBackgroundLight position="bottom" flipped/>
                </div>
             
            </body>
            
          </html>
  );
}

export default LayoutStyle;