import React, { useRef } from 'react'
import styles from '../StyleContainer/Modal.module.css'
import PropertyRegi from '../Assessts/realestate.png'
import Loans from '../Assessts/wallet.png'
import BuildingLicence from '../Assessts/certificate.png'
import KhathaChange from '../Assessts/document.png'
import eSwathu from '../Assessts/collectibles.png'
import SiteMerger from '../Assessts/innerjoinright.png'

function Modal({ onClose, Service_Card_title, description, logoSrc }) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    }
    const Service_Details = [
        {
            title: "Property Registration",
            description: "Simplify property transactions with our expert assistance. From document verification to post-registration formalities, we’ve got you covered.",
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
    // Having seperate for all the data, rather than list 1,2,3 making seperate object called list


    return (
        <div ref={modalRef} onClick={closeModal} className={styles.ModalBox}>
            <div className={styles.ModalContainer}>
                <button onClick={onClose} className={styles.XButton}>X</button>
                <div className={styles.ModalContent}>
                    <div className={styles.ModalFlex}>
                        <div className={styles.modalIcon}>
                            <img src={logoSrc} alt={`Property Registraion Icon`} className={styles.logo} />
                        </div>
                        <h1 className={styles.ModalTitle}>{Service_Card_title}</h1>
                    </div>
                    <p className={styles.ModalDiscription}>{Service_Details.find(item => item.title === Service_Card_title).description}</p>
                    <h2>Document Verification</h2>
                    <ul>
                        <li>{Service_Details.find(item => item.title === Service_Card_title).List1}</li>
                        <li>{Service_Details.find(item => item.title === Service_Card_title).List2}</li>
                        <li>{Service_Details.find(item => item.title === Service_Card_title).List3}</li>
                    </ul>
                    <button className={styles.ContactUs}> <a href='https://wa.me/919611866449'>Contact Us</a></button>
                </div>
            </div>
        </div>
    )
}

export default Modal