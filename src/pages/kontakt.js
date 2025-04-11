import React from 'react';
import styles from '../styles/kontakt.module.css'; // Importera CSS-modulen

const ContactUs = () => {
  return (
    <section className={styles.contactUs}>
      <div className={styles.contactContent}>
        <h2>Kontakta Oss</h2>
        <p>Vi på [Företagsnamn] är alltid redo att hjälpa till med ditt nästa projekt. Om du har några frågor eller funderingar, tveka inte att höra av dig till oss. Vi är här för att lyssna och ge dig den bästa lösningen för dina behov.</p>
        <div className={styles.contactDetails}>
          <p><strong>Telefon:</strong> +46 123 456 789</p>
          <p><strong>E-post:</strong> kontakt@foretagsnamn.se</p>
          <p><strong>Öppettider:</strong> Måndag till Fredag: 09:00 - 18:00</p>
        </div>
        <p className={styles.callToAction}>Är du intresserad av att fixa ett projekt med oss? Ring oss så ordnar vi något fantastiskt tillsammans!</p>
      </div>
      <div className={styles.contactMap}>
        <iframe 
          src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL" 
          width="100%" 
          height="100%"
          style={{border: 0}} 
          allowFullScreen="" 
          aria-hidden="false" 
          tabIndex="0"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
