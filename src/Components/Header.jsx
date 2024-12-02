import React, { useState } from 'react';
import styles from '../StyleContainer/Header.module.css';
import Logo from '../Assessts/Logo.png';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState); // Toggles menu state
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* <img src={Logo} alt="PropertyHub Logo" className={styles.logoImage} /> */}
        
        <Link to="/"><img src={Logo} alt="PropertyHub Logo" className={styles.logoImage} /></Link>
        <span className={styles.logoText}>PropertyHub</span>
      </div>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {!isMenuOpen ? (
          // Hamburger icon
          <>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </>
        ) : (
          // Close icon
          <span className={styles.closeIcon}>&times;</span>
        )}
      </div>
      <nav className={`${styles.navigation} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <Link to="/" className={styles.navLink} onClick={toggleMenu}>Home</Link>
        <Link to="/Service" className={styles.navLink} onClick={toggleMenu}>Services</Link>
        <Link to="/aboutus" className={styles.navLink} onClick={toggleMenu}>About Us</Link>
        <Link to="/ContactUs" className={styles.navLink} onClick={toggleMenu}>Contact Us</Link>
      </nav>
    </header>
  );
}

export default Header;
