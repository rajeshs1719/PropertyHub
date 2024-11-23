import React, { useState }from 'react';
import ServiceCard from './ServiceCard';
import styles from '../StyleContainer/Services.module.css';
import DiscussingImage from '../Assessts/Discussing.png'
import PropertyRegi from '../Assessts/realestate.png'
import Loans from '../Assessts/wallet.png'
import BuildingLicence from '../Assessts/certificate.png'
import KhathaChange from '../Assessts/document.png'
import eSwathu from '../Assessts/collectibles.png'
import SiteMerger from '../Assessts/innerjoinright.png'
import ModalPop from './Modal.jsx'
import BgBackground from '../Assessts/BuildingBg.jpg'

function Services() {

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

  const ServiceDetails = [
    {
      title: "Property Registration",

      heading: "Document Verification",
      List1: "Stamp Duty Calculation",
      List2: "Registration Process",
      List3: "Post-Registration Services",
      logoScr: PropertyRegi
    },
    {
      title: "Loans",
      description: "Access competitive property loans with ease. Our team ensures a smooth process to help you secure your dream property.",
      heading: "Document Verification",
      List1: "Loan Eligibility Check",
      List2: "Interest Rate Comparisons",
      List3: "Application Assistance",
      logoScr: Loans
    },
    {
      title: "Building Licence",
      description: "Navigate the building licence process effortlessly with our step-by-step guidance, ensuring compliance every step of the way.",
      heading: "Document Verification",
      List1: "Regulatory Approvals",
      List2: "Plan Sanctioning",
      List3: "Licence Issuance",
      logoScr: BuildingLicence
    },
    {
      title: "Khatha Change",
      description: "Update your property records seamlessly. We assist in reflecting ownership changes for taxes and utilities.",
      heading: "Document Verification",
      List1: "Ownership Verification",
      List2: "Encumbrance Certificate Assistance",
      List3: "Fraud Prevention",
      logoScr: KhathaChange
    },
    {
      title: "e - Swathu",
      description: "Combine or divide property plots hassle-free. We help you align your property structure with your needs.",
      heading: "Document Verification",
      List1: "Legal Documentation",
      List2: "Approval Assistance",
      List3: "Process Finalization",
      logoScr: eSwathu
    },
    {
      title: "Site Merger / Bifurcation",
      description: "Access competitive property loans with ease. Our team ensures a smooth process to help you secure your dream property.",
      heading: "Document Verification",
      List1: "Loan Eligibility Check",
      List2: "Interest Rate Comparisons",
      List3: "Application Assistance",
      logoScr: SiteMerger
    },
  ]

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
          <div className={styles.backgroundImage}>
            <img src={BgBackground} alt="Discussing Property Hub" className={styles.logoImage} />
          </div>

          <img src={DiscussingImage} alt="Discussing Property Hub" className={styles.logoImage1} />
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard key={index} Service_title={service.title} description={service.description} logoSrc={service.logoScr} />
        ))}
      </div>
      {/* <div> */}
        {/* {ServiceDetails.map((ServiceDetails, index) => (
          <ModalPop key={index} title={ServiceDetails.title} description={ServiceDetails.description} logoSrc={ServiceDetails.logoScr} />
        ))}
      </div> */}
    </section>


  );
}

export default Services;