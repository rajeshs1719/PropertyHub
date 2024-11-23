import React from 'react';
// import styles from './Header.module.css';
import styles from '../StyleContainer/Header.module.css';
import Logo from '../Assessts/Logo.png'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={Logo} alt="PropertyHub Logo" className={styles.logoImage} />
        <span className={styles.logoText}>PropertyHub</span>
      </div>
      <nav className={styles.navigation}>
        <a href="#home" className={styles.navLink}>Home</a>
        <a href="#about" className={styles.navLink}>About Us</a>
        <a href="#contact" className={styles.navLink}>Contact Us</a>
      </nav>
    </header>
  );
}

export default Header;