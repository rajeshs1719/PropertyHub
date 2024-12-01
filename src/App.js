import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import Hero from './Components/Hero';
import Services from './Components/Services';
import WhyChooseUs from './Components/WhyChooseUs';
import Review from './Components/Review';
import WhatsAppSticky from './Components/Whatsapp';
import styles from './StyleContainer/PropertyHub.module.css';
import Contact from './Components/Contact';

function PropertyHub() {
  return (
    <Router>
      <div className={styles.propertyHub}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <WhyChooseUs />
                <Review />
              </>
            }
          />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/ContactUs" element={<Contact />} />
        </Routes>
        <Footer />
        <WhatsAppSticky />
      </div>
    </Router>
  );
}

export default PropertyHub;
