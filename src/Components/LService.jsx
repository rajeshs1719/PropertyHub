import React from 'react';
import ServiceCard from './ServiceCard';
import styles from '../StyleContainer/LService.module.css';
import PropertyRegi from '../Assessts/realestate.png'
import Loans from '../Assessts/wallet.png'
import BuildingLicence from '../Assessts/certificate.png'
import KhathaChange from '../Assessts/document.png'
import eSwathu from '../Assessts/collectibles.png'
import SiteMerger from '../Assessts/innerjoinright.png'
import ServiceImg from '../Assessts/ServiceImage.png'

function LService() {
    const services = [
        {
            title: "Property Registration",
            description: "Simplify your property registration process with our expert assistance for a smooth experience.",
            logoScr: PropertyRegi
        },
        {
            title: "Loans",
            description: "Find the best property loan options with our guidance, tailored to your financial needs.",
            logoScr: Loans
        },
        {
            title: "Building Licence",
            description: "We assist you in obtaining building licences efficiently, ensuring compliance with all regulations.",
            logoScr: BuildingLicence
        },
        {
            title: "Khatha Change",
            description: "Easily update property records with our support, ensuring accurate ownership details.",
            logoScr: KhathaChange
        },
        {
            title: "e - Swathu",
            description: "Access verified property records with ease to prevent disputes and ensure authenticity",
            logoScr: eSwathu
        },
        {
            title: "Site Merger / Bifurcation",
            description: "Navigate property mergers or divisions seamlessly with our expert guidance.",
            logoScr: SiteMerger
        },
    ];


    return (
        <section id="service" className={styles.services}>
            <div className={styles.servicesHeader}>

                {/* Left Header Content */}
                <div className={styles.headerContent}>
                    <h2 className={styles.servicesTitle}>Our Services</h2>
                    <h3 className={styles.servicesSubtitle}>Expert Solutions for Every Property Milestone</h3>
                    <p className={styles.servicesDescription}>
                        At Property Hub, we offer a range of trusted services, designed to make your property journey smooth, efficient, and stress-free.
                    </p>
                </div>

                {/* Right Image */}
                <div className={styles.imageContainer}>
                    <img src={ServiceImg} alt="Discussing Property Hub" className={styles.logoImage} />
                </div>
            </div>

            {/* Service Cards Grid */}
            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <ServiceCard key={index} Service_title={service.title} description={service.description} logoSrc={service.logoScr} />
                ))}
            </div>
        </section>
    );
}

export default LService
