import React from 'react';
import styles from '../StyleContainer/AboutUs.module.css';
import AboutUsImg from '../Assessts/AboutUs.png'

function AboutUs() {
  return (
    <section id = "AboutUsRe" className={styles.aboutUs}>
      <div className={styles.aboutContent}>
        <h2 className={styles.aboutTitle}>About Us</h2>
        <p className={styles.aboutDescription}>
          At Property Hub, we're more than just a service provider we're your trusted partner in all things property. With a mission to simplify complex processes and deliver exceptional customer experiences, we are committed to helping you navigate the world of real estate with confidence and ease.
        </p>
        <p className={styles.aboutDescription}>
          What sets us apart is our dedication to building lasting relationships. We believe that every property journey is personal, and we tailor our services to align with your aspirations, priorities, and goals.
        </p>
      </div>
      <div className={styles.aboutImageWrapper}>
        <img src={AboutUsImg} alt="Property Hub Team" className={styles.aboutImage} />
      </div>
    </section>
  );
}

export default AboutUs;