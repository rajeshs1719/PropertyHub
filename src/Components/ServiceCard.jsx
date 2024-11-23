// import React, { useState } from 'react';
// import styles from '../StyleContainer/ServicesCard.module.css';
// import Modal from './Modal';

// function ServiceCard({ title, description, logoSrc }) {
//   const [showModal, setShowModal] = useState(false)


//   return (
//     <div className={styles.serviceCard}>
//       {/* Header section with logo and title */}
//       <div className={styles.serviceflex}>
//         <div className={styles.serviceIcon}>
//           <img src={logoSrc} alt={`${title} Icon`} className={styles.logo} />
//         </div>
//         <h4 className={styles.serviceTitle}>{title}</h4>
//       </div>

//       {/* Description */}
//       <p className={styles.serviceDescription}>{description}</p>

//       {/* Learn more link */}
//       <a href="#learn-more" onClick={()=>setShowModal(true)} className={styles.learnMore}>
//         Learn more &gt;
//       </a>
//       {showModal && <Modal onClose={()=>setShowModal(false)} />}
//     </div>
//   );
// }


// export default ServiceCard;





import React, { useState } from 'react';
import styles from '../StyleContainer/ServicesCard.module.css';
import Modal from './Modal';

function ServiceCard({ Service_title, description, logoSrc }) {
    const [showModal, setShowModal] = useState(false);

    const handleLearnMoreClick = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className={styles.serviceCard}>
            {/* Header section with logo and title */}
            <div className={styles.serviceflex}>
                <div className={styles.serviceIcon}>
                    <img src={logoSrc} alt={`${Service_title} Icon`} className={styles.logo} />
                </div>
                <h4 className={styles.serviceTitle}>{Service_title}</h4>
            </div>

            {/* Description */}
            <p className={styles.serviceDescription}>{description}</p>

            {/* Learn more button */}
            <a href="#learn-more" onClick={handleLearnMoreClick} className={styles.learnMore}>
                Learn more &gt;
            </a>

            {/* Conditional rendering of the modal */}
            {showModal && (
                <Modal
                    onClose={handleCloseModal}
                    Service_Card_title={Service_title}
                    description={description}
                    logoSrc={logoSrc}
                />
            )}
        </div>
    );
}

export default ServiceCard;
