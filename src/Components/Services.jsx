import React, { useState } from 'react';
import styles from '../StyleContainer/Services.module.css';
import PropertyRegi from '../Assessts/realestate.png'
import Loans from '../Assessts/wallet.png'
import BuildingLicence from '../Assessts/certificate.png'
import KhathaChange from '../Assessts/document.png'
import eSwathu from '../Assessts/collectibles.png'
import SiteMerger from '../Assessts/innerjoinright.png'
import ServiceDetails from './ServiceDetails';

function Services() {
 
  const [index, setIndex] = useState(0);
 
return (
  <div id='learn-more' className={styles.Content}>
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








