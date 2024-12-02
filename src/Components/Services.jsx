import React, { useState } from 'react';
// import ServiceCard from './ServiceCard';
import styles from '../StyleContainer/Services.module.css';
import PropertyRegi from '../Assessts/realestate.png'
import Loans from '../Assessts/wallet.png'
import BuildingLicence from '../Assessts/certificate.png'
import KhathaChange from '../Assessts/document.png'
import eSwathu from '../Assessts/collectibles.png'
import SiteMerger from '../Assessts/innerjoinright.png'
// import ServiceImg from '../Assessts/ServiceImage.png'
import ServiceDetails from './ServiceDetails';

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

  const Service_list = ['Property Registation', 'Loans', 'BuildingLicence', 'KhathaChange', 'eSwathu', 'SiteMergerBifurcation']

  const [index, setIndex] = useState(0);
  const [isActive, UpdateActive] = useState(false);
 

return (
  <div className={styles.Content}>
    <h1>Services</h1>
    <div className={styles.ListOfService}>
      <ul className={styles.ListofImg}>
        <li><a onClick={() => setIndex(0)} href="#"><img src={PropertyRegi} alt="" /></a>Property Registration</li>
        <li><a onClick={() => setIndex(1)}><img src={Loans} alt="" /></a>Loans</li>
        <li><a onClick={() => setIndex(2)}><img src={BuildingLicence} alt="" /></a>Building Licence</li>
        <li><a onClick={() => setIndex(3)}><img src={KhathaChange} alt="" /></a>Khatha Change</li>
        <li><a onClick={() => setIndex(4)}><img src={eSwathu} alt="" /></a>e-Swathu</li>
        <li><a onClick={() => setIndex(5)}><img src={SiteMerger} alt="" /></a>Site Merger</li>
      </ul>
    </div>
    <ServiceDetails serviceNumber={index} />
  </div >
);
}

export default Services;








