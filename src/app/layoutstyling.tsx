"use client";
import { useTheme } from "./themeContext";
import GradientBackgroundLight from "../components/GradientBackgroundLight";
import Navbar from "../components/Navbar";
import { Inter } from "next/font/google";
import { relative } from "path";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const LayoutStyle = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  const styles: React.CSSProperties = {
    backgroundColor: theme === "light" ? "#ffffffff" : "#000000ff",
    color: theme === "light" ? "#000" : "#ffffffff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    overflow: "hidden",
    padding: 0,
    margin: 0,
  };

  return (
    <div style={styles} className={inter.className}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 0,
        }}
      >
        <GradientBackgroundLight />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        {children}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 0,
        }}
      >
        <GradientBackgroundLight position="bottom" flipped />
      </div>
    </div>
  );
};

export default LayoutStyle;
