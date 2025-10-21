'use client';

import styles from './DarkModeButton.module.css'
import { useTheme } from '../app/themeContext';
import { useState } from 'react';

type Theme = "light" | "dark";
const DarkModeButton = ({linkDropDownActive, setLinkDropdownActive, handleClick}) => {
   
    
    const { toggleTheme } = useTheme();
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    
    const navItems = [
        {label : 'Light Mode', value : 'light'},
        {label : 'Dark Mode', value : 'dark' }
    ]
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        //onClick={toggleTheme}  old onClick for darkmode button
        
        <div className={styles.darkModeContainerBtn}>
            <div className={`${styles.DarkModeButton} `} onClick={ () => {
                 //console.log('Before toggle:', isOpen);
                handleClick('themes')
                console.log(linkDropDownActive)
                setIsOpen(!isOpen) }} >
                <img src={`${theme}.svg`} width={20} height={20} alt={`${theme == 'light' ? 'Light' : 'Dark'} Mode`}/>
            
            </div>
            
             <ul className={`${styles.menu} ${linkDropDownActive=='themes' ? styles.open : ''}`}>
                { navItems.map(({label, value}) => (
                    
                    
                    <li  key={value} onClick={() => {setSelectedItem(value); setIsOpen(false); toggleTheme(value as Theme); }} className={selectedItem === value ? styles.active : styles.themeOption}>
                        
                        {label}</li>
                )) }
            
                
            </ul>

        
        </div>
    
    )
}

export default DarkModeButton