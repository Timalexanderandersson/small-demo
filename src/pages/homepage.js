import React from 'react';
import styles from '../styles/homepage.module.css';
import { Link } from 'react-router-dom';
import balkong from '../assets/balkong.jpg';
import tak from '../assets/tak.jpg';
import veranda from '../assets/veranda.jpg';

const HomePage = () => {
  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
        <h1>Välkommen till DittHantverk AB</h1>
<p>
  Vi är din pålitliga partner för bygg- och renoveringsprojekt. Med erfarenhet och passion för hantverk skapar vi skräddarsydda lösningar som förvandlar ditt hem eller företag till något unikt.
</p>


          <Link to="/kontakt">
            <button className={styles.ctaButton}>Kontakta oss</button>
          </Link>
        </div>
      </section>

      {/* Varför välja oss Section */}
      <section className={styles.whyChooseUs}>
  <h2 className={styles.headerchoose}>Varför välja oss?</h2>
  <div className={styles.reasonsContainer}>
    <div className={styles.reasonItem}>
      <i className={`fa fa-cogs ${styles.icon}`} aria-hidden="true"></i>
      <h3>Erfarenhet och pålitlighet</h3>
      <p>
        Med över x antal års erfarenhet inom byggbranschen, kan vi garantera att ditt projekt är i trygga händer. Vi är pålitliga och levererar alltid i tid och med högsta kvalitet.
      </p>
    </div>
    <div className={styles.reasonItem}>
      <i className={`fa fa-shield-alt ${styles.icon}`} aria-hidden="true"></i>
      <h3>Garantier på allt arbete</h3>
      <p>
        Vi står bakom vårt arbete. Därför erbjuder vi omfattande garantier på alla våra projekt, vilket ger dig trygghet och säkerhet för långsiktig hållbarhet.
      </p>
    </div>
    <div className={styles.reasonItem}>
      <i className={`fa fa-thumbs-up ${styles.icon}`} aria-hidden="true"></i>
      <h3>Professionellt resultat</h3>
      <p>
        Vår passion är att skapa vackra och hållbara resultat. Vi jobbar med noggrant utvalda material och moderna tekniker för att alltid leverera ett resultat vi är stolta över.
      </p>
    </div>
  </div>
</section>

    
      <section className={styles.services} id="tjanster">
        <h2>Våra Tjänster</h2>
        <p>Utforska vårt breda utbud av tjänster som är utformade för att möta dina bygg- och renoveringsbehov.</p>
        <div className={styles.servicesContainer}>
          {/* Existerande tjänster */}
    <div className={styles.serviceItem}>
      <img src={balkong} alt="Balkong Renovering" />
      <h3>Renovering av Balkonger</h3>
      <p>Vi erbjuder professionell renovering, från små förbättringar till större renoveringar.</p>
    </div>
    <div className={styles.serviceItem}>
      <img src={tak} alt="Tak Renovering" />
      <h3>Nybyggnation av Tak</h3>
      <p>Vi hjälper dig att bygga eller renovera ditt tak med bästa material och hållbara lösningar för långvarig funktion.</p>
    </div>
    <div className={styles.serviceItem}>
      <img src={veranda} alt="Veranda Byggnation" />
      <h3>Veranda & Altaner</h3>
      <p>Vi bygger vackra och funktionella verandor och altaner, skräddarsydda för att passa din stil och dina behov.</p>
    </div>

    {/* Nya tjänster */}
    <div className={styles.serviceItem}>
      <img src={veranda} alt="Fasadrenovering" />
      <h3>Fasadrenovering</h3>
      <p>Fräscha upp ditt hus med en ny fasad! Vi renoverar och målar fasader för att ge ditt hem ett nytt liv och förbättra dess energi-effektivitet.</p>
    </div>
    <div className={styles.serviceItem}>
      <img src={tak} alt="Garage Byggnation" />
      <h3>Byggnation av Garage</h3>
      <p>Vi bygger skräddarsydda garage efter dina behov, oavsett om du behöver extra förvaring eller en fullt utrustad verkstad.</p>
    </div>
    <div className={styles.serviceItem}>
      <img src={balkong} alt="Inredning & Design" />
      <h3>Inredning & Design</h3>
      <p> funktionalitet och komfort i ditt hem.</p>
    </div>
  </div>
</section>

      {/* Hitta oss och öppettider Section */}
      <section className={styles.contactInfo}>
  <div className={styles.contactDetails}>
    <h3>Vart hittar du oss?</h3>
    <p>Vi finns på <strong>DittFöretag Väg 123, 12345 Staden</strong></p>
    <p>Ni kan nå oss på våra öppetider mellan <strong>08:00 - 17:00</strong></p>
    <p>För specifika frågor eller bokning av möte, vänligen kontakta oss via telefon eller e-post!</p>
  </div>
  <div className={styles.mapContainer}>
    <iframe
      src="https://www.google.com/maps/embed?pb=... [Google Maps Embed Code]"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</section>

    </div>
  );
};

export default HomePage;
