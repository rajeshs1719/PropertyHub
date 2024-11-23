import React from 'react';
// import styles from './WhyChooseUs.module.css';
import styles from '../StyleContainer/WhyChooseUs.module.css';

function WhyChooseUs() {
  const reasons = [
    {
      title: "Reliable Service",
      description: "We provide trusted solutions backed by experience, ensuring your property journey is safe and seamless.",
      icon: "https://cdn.builder.io/api/v1/image/assets/51803d5b47f04d5e9a97d1720251a969/6a243bdeea78e8b3f40a6a1da4b3c285e16021b50796f5a0e76c6bf0bc4f38f0?apiKey=51803d5b47f04d5e9a97d1720251a969&",
    },
    {
      title: "Customer Centric Approach",
      description: "We listen to your needs and tailor our services to create a personalized experience that puts you first.",
      icon: "https://cdn.builder.io/api/v1/image/assets/51803d5b47f04d5e9a97d1720251a969/6a243bdeea78e8b3f40a6a1da4b3c285e16021b50796f5a0e76c6bf0bc4f38f0?apiKey=51803d5b47f04d5e9a97d1720251a969&",
    },
    {
      title: "Expert Guidance",
      description: "Our experienced team provides trusted advice to help you make confident property decisions.",
      icon: "https://cdn.builder.io/api/v1/image/assets/51803d5b47f04d5e9a97d1720251a969/6a243bdeea78e8b3f40a6a1da4b3c285e16021b50796f5a0e76c6bf0bc4f38f0?apiKey=51803d5b47f04d5e9a97d1720251a969&",
    },
    {
      title: "Seamless Process",
      description: "We simplify every step of your property journey, ensuring a smooth and hassle-free process.",
      icon: "https://cdn.builder.io/api/v1/image/assets/51803d5b47f04d5e9a97d1720251a969/6a243bdeea78e8b3f40a6a1da4b3c285e16021b50796f5a0e76c6bf0bc4f38f0?apiKey=51803d5b47f04d5e9a97d1720251a969&",
    },
  ];

  return (
    <section className={styles.whyChooseUs}>
      <h2 className={styles.title}>Why Choose Us?</h2>
      <p className={styles.description}>
        Our team of experts offers honest advice and transparent services, ensuring that every step of your property process is handled with care and professionalism.
      </p>
      <div className={styles.reasonsGrid}>
        {reasons.map((reason, index) => (
          <div key={index} className={styles.reasonCard}>
            {reason.icon && <img src={reason.icon} alt="" className={styles.reasonIcon} />}
            <h3 className={styles.reasonTitle}>{reason.title}</h3>
            <p className={styles.reasonDescription}>{reason.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;