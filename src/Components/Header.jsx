import React, { useState } from 'react';
import styles from '../StyleContainer/Header.module.css';
import Logo from '../Assessts/Logo.png';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState); // Toggles menu state
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="PropertyHub Logo" className={styles.logoImage} />
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
        <a href="/" className={styles.navLink} onClick={toggleMenu}>Home</a>
        <a href="/aboutus" className={styles.navLink} onClick={toggleMenu}>About Us</a>
        <a href="#service" className={styles.navLink} onClick={toggleMenu}>Services</a>
        <a href="/ContactUs" className={styles.navLink} onClick={toggleMenu}>Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;
