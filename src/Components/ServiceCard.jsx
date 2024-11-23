import React, { useState } from 'react';
import styles from '../StyleContainer/ServicesCard.module.css';
import PropertyRegi from './Modal';

function ServiceCard({ title, description, logoSrc }) {
  const [showModal, setShowModal] = useState(false)


  return (
    <div className={styles.serviceCard}>
      {/* Header section with logo and title */}
      <div className={styles.serviceflex}>
        <div className={styles.serviceIcon}>
          <img src={logoSrc} alt={`${title} Icon`} className={styles.logo} />
        </div>
        <h4 className={styles.serviceTitle}>{title}</h4>
      </div>

      {/* Description */}
      <p className={styles.serviceDescription}>{description}</p>

      {/* Learn more link */}
      <a href="#learn-more" onClick={()=>setShowModal(true)} className={styles.learnMore}>
        Learn more &gt;
      </a>
      {showModal && <PropertyRegi onClose={()=>setShowModal(false)} />}
    </div>
  );
}


export default ServiceCard;


