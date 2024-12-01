import React from 'react'
import styles from '../StyleContainer/Contact.module.css';
import Location from '../Assessts/location.png';
import Phone from '../Assessts/Phone.png'
import Mail from '../Assessts/Mail.png';
import WhatsApp from '../Assessts/whatsapp.png';
import Map from '../Assessts/Map.png';

function Contact() {
    return (

        <div className={styles.ContactUs}>
            <div className={styles.ContactContent}>
                <h1 className={styles.header}>Get in Touch</h1>
                <p className={styles.subHeader}>
                    We're Here to Help You Every Step of the Way!
                </p>
                <p className={styles.description}>
                    We value your inquiries and are here to help. Whether you have questions, need advice, or
                    want to begin your property journey, our team is just a message away.
                </p>
                <div className={styles.contactItems}>
                    <div className={styles.item}>
                        <span className={styles.icon}><img src={Phone} alt="Phone" /></span>
                        <div>
                            <h4 className={styles.title}>Call Us</h4>
                            <a href="tel:+919611866449"><p className={styles.info}>+91 919611 866449</p></a>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.icon}><img src={Mail} alt="Mail" /></span>
                        <div>
                            <h4 className={styles.title}>Email Us</h4>
                            <a href="mailto:contact@propertyhub.com"><p className={styles.info}>contact@propertyhub.com</p></a>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.icon}><img src={WhatsApp} alt="" /></span>
                        <div>
                            <h4 className={styles.title}>WhatsApp Us</h4>
                            <a href="https://wa.me/919611866449"> <p className={styles.info}>+91 919611866449</p></a>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <span className={styles.icon}><img src={Location} alt="" /></span>
                        <div>
                            <h4 className={styles.title}>Visit Us</h4>
                            <a href="https://www.google.com/maps/dir//Annapurna+Dhaba,+%23191%2F3rd+Main+Rd,+Prince+Jayachamaraja+Wodeyar+extension,+Davanagere,+Karnataka+577002/@14.4593417,75.9152794,17z/data=!4m18!1m8!3m7!1s0x3bba257422d97a0f:0xd980e13e2182db70!2sAnnapurna+Dhaba!8m2!3d14.4593417!4d75.9178543!15sCkQ2dGggY3Jvc3MsIG9wcC4gQW5uYXB1cm5hIERoYWJhLCBTcmkgTmlqYWxpbmdhcHBhIExheW91dCwgRGF2YW5hZ2VyZZIBFXJhamFzdGhhbmlfcmVzdGF1cmFudOABAA!16s%2Fg%2F1260lzrv_!4m8!1m0!1m5!1m1!1s0x3bba257422d97a0f:0xd980e13e2182db70!2m2!1d75.9178543!2d14.4593417!3e9?entry=ttu&amp;g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D"><p className={styles.info}>
                                #831, 6th cross, opp. Annapoorna Dabha, Sri Nijalingappa Layout,
                                Davanagere
                            </p></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.ContactImg}>
                <a href="https://www.google.com/maps/dir//Annapurna+Dhaba,+%23191%2F3rd+Main+Rd,+Prince+Jayachamaraja+Wodeyar+extension,+Davanagere,+Karnataka+577002/@14.4593417,75.9152794,17z/data=!4m18!1m8!3m7!1s0x3bba257422d97a0f:0xd980e13e2182db70!2sAnnapurna+Dhaba!8m2!3d14.4593417!4d75.9178543!15sCkQ2dGggY3Jvc3MsIG9wcC4gQW5uYXB1cm5hIERoYWJhLCBTcmkgTmlqYWxpbmdhcHBhIExheW91dCwgRGF2YW5hZ2VyZZIBFXJhamFzdGhhbmlfcmVzdGF1cmFudOABAA!16s%2Fg%2F1260lzrv_!4m8!1m0!1m5!1m1!1s0x3bba257422d97a0f:0xd980e13e2182db70!2m2!1d75.9178543!2d14.4593417!3e9?entry=ttu&amp;g_ep=EgoyMDI0MTExMi4wIKXMDSoASAFQAw%3D%3D"><img src={Map} alt="Map" /></a>
 
            </div>
        </div>
    )
}

export default Contact
