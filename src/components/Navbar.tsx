"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";
import DarkModeButton from "../components/DarkModeButton";
import { useTheme } from "../app/themeContext";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "DSA", href: "/dsa" },
  { label: "Projects", href: "/projects" },
  { label: "Blog/Notes", href: "/notes" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<null | "links" | "themes">(null);
  const { theme } = useTheme();

  /*
    handleClick takes one argument: key, which is of type union and must be either 'themes', or 'links'.
    key becomes whatever menu is accessed. If you click the theme buttom key is 'theme', if you click links 
    key is 'links'
    setActiveMenu is called to set the variable activeMenu to either 'themes' or 'links'
    to keep track of which menu is open. 
    setActiveMenu receives the previous value of the state 'prev'(initially set to null)
    and updates it based on a conditional:
    if prev === key, (you click an already opem menu) it sets the state to null and closes the menu.
    if prev != key, setActiveMenu sets the activeMenu to the key and opens the new menu
  */

  const handleClick = (key: "themes" | "links") => {
    setActiveMenu((prev) => (prev == key ? null : key));
  };
  const pathname = usePathname();

  return (
    <div className={styles.navParent}>
      <nav className={styles.nav}>
        <div className={styles.logo}>My Site</div>

        <div className={styles.divRight}>
          <button
            className={styles.toggle}
            onClick={() => {
              setIsOpen(!isOpen);
              handleClick("links");
              console.log(activeMenu);
            }}
          >
            ☰
          </button>

          <ul
            className={`${styles.menu} ${activeMenu == "links" ? styles.open : ""}`}
          >
            {navItems.map(
              (
                { label, href }, // label : "Home", href "/"etc.
              ) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${styles.link} ${styles[theme]} ${pathname === href ? styles.active : ""}`}
                    onClick={() => {
                      setIsOpen(false);
                      handleClick("links");
                    }}
                  >
                    {label}
                  </Link>
                </li>
              ),
            )}
          </ul>
          <DarkModeButton
            activeDropDownMenu={activeMenu}
            handleClick={handleClick}
          ></DarkModeButton>
        </div>
      </nav>
    </div>
  );
}
