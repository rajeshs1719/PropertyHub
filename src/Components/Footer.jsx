import React from 'react';
import styles from '../StyleContainer/Footer.module.css';
import Location from '../Assessts/location.png'
import Phone from '../Assessts/Phone.png'
import Mail from '../Assessts/Mail.png'
import WhatsApp from '../Assessts/whatsapp.png'
import Building from '../Assessts/Buildings.png'

function Footer() {
  return (
    <div className={styles.footerBody}>
      <div className={styles.BgImage}>
        <img src={Building} alt='Building Images'/>
      </div>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>

            {/* Service*/}
            <h3 className={styles.footerTitle}>Services</h3>
            <ul className={styles.footerList}>
              <div className={styles.displayFlex}>
                <div className={styles.column}>
                  <li><a href="#property-registration">Property Registration</a></li>
                  <li><a href="#loans">Loans</a></li>
                  <li><a href="#khatha-change">Khatha Change</a></li>
                </div>
                <div className={styles.column}>
                  <li><a href="#building-licence">Building Licence</a></li>
                  <li><a href="#e-swathu">e - Swathu</a></li>
                  <li><a href="#site-merger">Site Merger and Bifurcation</a></li>
                </div>
              </div>
            </ul>
          </div>

          {/* Quick Service*/}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Quick Links</h3>
            <ul className={styles.footerList} id={styles.footerListAlign}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>


          {/* Contact Us */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>Contact Us</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {/* Address */}
              <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <img
                  src={Location}
                  alt="Address Logo"
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}
                />
                <a href="https://www.google.com/maps/dir//Annapurna+Dhaba,+%23191%2F3rd+Main+Rd,+Prince+Jayachamaraja+Wodeyar+extension,+Davanagere,+Karnataka+577002/@14.4593417,75.9152794,17z/data=!4m18!1m8!3m7!1s0x3bba257422d97a0f:0xd980e13e2182db70!2sAnnapurna+Dhaba!8m2!3d14.4593417!4d75.9178543!15sCkQ2dGggY3Jvc3MsIG9wcC4gQW5uYXB1cm5hIERoYWJhLCBTcmkgTmlqYWxpbmdhcHBhIExheW91dCwgRGF2YW5hZ2VyZZIBFXJhamFzdGhhbmlfcmVzdGF1cmFudOABAA!16s%2Fg%2F1260lzrv_!4m8!1m0!1m5!1m1!1s0x3bba257422d97a0f:0xd980e13e2182db70!2m2!1d75.9178543!2d14.4593417!3e9?entry=ttu&amp;g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D"> #831, 6th cross, opp. Annapoorna Dabha, Sri Nijalingappa Layout, Davanagere</a>
              </li>

              {/* Phone */}
              <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <img
                  src={Phone}
                  alt="Phone Logo"
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}
                />
                <a href="tel:+919611866449">Call Us</a>
              </li>

              {/* Email */}
              <li style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                <img
                  src={Mail}
                  alt="Email Logo"
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}
                />
                <a href="mailto:contact@propertyhub.com">contact@propertyhub.com</a>
              </li>

              {/* WhatsApp */}
              <li style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={WhatsApp}
                  alt="WhatsApp Logo"
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}
                />
                <a href="https://wa.me/919611866449">WhatsApp Us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;