"use client";

import styles from "./GradientBackgroundLight.module.css";

export default function GradientBackgroundLight({
  position = "top",
  flipped = false,
}) {
  const style = {
    top: position === "top" ? 0 : "auto",
    bottom: position === "bottom" ? 0 : "auto",
  };

  return (
    <div
      style={style}
      className={`${styles.gradientLight} ${flipped ? styles.flippedGradientLight : ""}`}
    ></div>
  );
}
