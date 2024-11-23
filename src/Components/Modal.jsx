import React, { useRef } from 'react'
import styles from '../StyleContainer/Modal.module.css'

function Modal({ onClose, title, description, logoSrc }) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return (
        <div ref={modalRef} onClick={closeModal} className={styles.ModalBox}>
            <div className={styles.ModalContainer}>
                <button onClick={onClose} className={styles.XButton}>X</button>
                <div className={styles.ModalContent}>
                    <div className={styles.ModalFlex}>
                        <div className={styles.modalIcon}>
                            <img src={logoSrc} alt={`Property Registraion Icon`} className={styles.logo} />
                        </div>
                        <h1 className={styles.ModalTitle}>{title}</h1>
                    </div>
                    <p className={styles.ModalDiscription}>{description}</p>
                    <h2>Document Verification</h2>
                    <ul>
                        <li>Stamp Duty Calculation</li>
                        <li>Registration Process</li>
                        <li>Post-Registration Services</li>
                    </ul>
                    <button className={styles.ContactUs}> <a href='https://wa.me/919611866449'>Contact Us</a></button>
                </div>
            </div>
        </div>
    )
}

export default Modal