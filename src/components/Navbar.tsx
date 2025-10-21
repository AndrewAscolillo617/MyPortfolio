'use client'; 

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import DarkModeButton from "../components/DarkModeButton";
import { useTheme } from "../app/themeContext";

const navItems = [
  {label : 'Home', href : '/'},
  {label : 'About', href : '/about'},
  {label : 'DSA', href : '/dsa'}
];



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<null | 'links' | 'themes'>(null);
  const { theme } = useTheme()
  const handleClick = (key: 'themes' | 'links') => {
    setActiveMenu(prev => (prev == key ? null : key));
  }
  const pathname = usePathname();
 
  
  
 
  
  return (
    
      <div className={styles.navParent}>
        <nav className={styles.nav}>
          <div className={styles.logo}>My Site</div>
          
          <div className={styles.divRight}>
            <button className={styles.toggle} onClick={() => {setIsOpen(!isOpen); handleClick('links'); console.log(activeMenu)}}>☰</button>
            
            <ul className={`${styles.menu} ${activeMenu == 'links' ? styles.open : ''}`}>
              {navItems.map(({ label, href }) => ( // label : "Home", href "/"etc.
                <li key={href}>
                  <Link
                    href={href}
                    className={`${styles.link} ${styles[theme]} ${pathname === href ? styles.active : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                  
                </li>
                
              ))}
              
                  
            </ul>
              <DarkModeButton linkDropDownActive={activeMenu}
              setLinkDropdownActive ={setActiveMenu}
              handleClick={handleClick}>

            </DarkModeButton>
          </div>
        </nav>
      </div>
    
  );
}