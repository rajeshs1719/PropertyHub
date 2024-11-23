import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import AboutUs from './AboutUs';
import Footer from './Footer';
// import styles from '..//PropertyHub.module.css';
import styles from '../StyleContainer/PropertyHub.module.css';

function PropertyHub() {
  return (
    <div className={styles.propertyHub}>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default PropertyHub;