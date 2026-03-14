"use client";

import styles from "./DarkModeButton.module.css";
import { useTheme } from "../app/themeContext";
import { useState } from "react";
import Image from "next/image";

type Theme = "light" | "dark";

const DarkModeButton = ({ activeDropDownMenu, handleClick }) => {
  const { toggleTheme } = useTheme();
  const { theme } = useTheme();

  const navItems = [
    { label: "Light Mode", value: "light" },
    { label: "Dark Mode", value: "dark" },
  ];
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    //onClick={toggleTheme}  old onClick for darkmode button

    <div className={styles.darkModeContainerBtn}>
      <div
        className={`${styles.DarkModeButton} `}
        onClick={() => {
          handleClick("themes"); //this gets passed up to navbar file
          //console.log(activeDropDownMenu)
        }}
      >
        <Image
          src={`/${theme}.svg`}
          width={20}
          height={20}
          alt={`${theme == "light" ? "Light" : "Dark"} Mode`}
        />
      </div>

      <ul
        className={`themeSelector ${styles.menu} ${activeDropDownMenu == "themes" ? styles.open : ""}`}
      >
        {navItems.map(({ label, value }) => (
          <li
            key={value}
            onClick={() => {
              setSelectedItem(value);
              toggleTheme(value as Theme);
              handleClick("themes");
            }}
            className={
              selectedItem === value ? 'active' : 'themeOptions'
            }
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DarkModeButton;
