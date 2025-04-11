// Footer.jsx
import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>Kontakta oss</h3>
            <p>Telefon: +46 123 456 789</p>
            <p>Email: info@dittforetag.se</p>
          </div>

          <div className={styles.footerSection}>
            <h3>Öppettider</h3>
            <p>Måndag - Fredag: 09:00 - 18:00</p>
            <p>Lördag: 10:00 - 14:00</p>
            <p>Söndag: Stängt</p>
          </div>

          <div className={styles.footerSection}>
            <h3>Hitta oss</h3>
            <p>Adress: Gatan 123, 12345 Staden, Sverige</p>
            <p>GPS-koordinater: 59.3293° N, 18.0686° E</p>
          </div>
        </div>

        <hr className={styles.hrLine} />
        <p className={styles.kopyright}>© 2025 Ditt Företag. Alla rättigheter förbehållna.</p>
      </div>
    </footer>
  );
};

export default Footer;
