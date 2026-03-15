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

  return (
    <div className={`${inter.className} layout`}>
      <div className="gradientLightTop">
        <GradientBackgroundLight />
      </div>

      <div style={{ position: "relative", zIndex: 1, paddingTop: "115px" }}>
        <Navbar />
        {children}
      </div>

      <div className="gradientLightBottom">
        <GradientBackgroundLight position="bottom" flipped />
      </div>
    </div>
  );
};

export default LayoutStyle;
