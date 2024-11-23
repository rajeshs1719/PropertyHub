// import React from 'react';
// import Footer from './Components/Footer';
// import styles from './PropertyHub.module.css';
// import Header from './Components/Header';
// import AboutUs from './Components/AboutUs';
// import Hero from './Components/Hero';
// import Services from './Components/Services';
// import WhyChooseUs from './Components/WhyChooseUs';

// function App() {
//   return (
//     <div className={styles.propertyHub}>
//       <Header/>
//       <main>
//         <Hero/>
//         <Services/>
//         <WhyChooseUs/>
//         <AboutUs/>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Footer from './Components/Footer';
// import styles from './PropertyHub.module.css';
import Header from './Components/Header';
import AboutUs from './Components/AboutUs';
import Hero from './Components/Hero';
import Services from './Components/Services';
import WhyChooseUs from './Components/WhyChooseUs';
import styles from './StyleContainer/PropertyHub.module.css'
import WhatsAppSticky from './Components/Whatsapp';

function PropertyHub() {
  return (
    <div className={styles.propertyHub}>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <AboutUs />
      </main>
      <Footer />
      <WhatsAppSticky/>
    </div>
  );
}

export default PropertyHub;