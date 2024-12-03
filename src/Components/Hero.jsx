import React from 'react';
import styles from '../StyleContainer/Hero.module.css';

function Hero() {
  return (
    <section id = "home" className={styles.hero}>
      <div className={styles.HeroBox}>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Meet Your Real Estate Expert
            <span className={styles.heroSubtitle}>At Property Hub</span>
          </h1>
          <p className={styles.heroDescription}>
            Welcome to Property Hub, where your property needs are met with care, expertise, and personalized service. From registration to loans and everything in between, we're dedicated to making your property experience effortless and rewarding.
          </p>
        </div>
        {/* <div className={styles.heroImageWrapper}>
          <img src={VillaImage} alt="Property Hub Expert" className={styles.heroImage} />
        </div> */}
      </div>

    </section>
  );
}

export default Hero;

