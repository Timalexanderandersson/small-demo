import React, { useState } from 'react';
import styles from '../styles/navbar.module.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>DittFöretag</div>
        <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
          <li><Link to="/" onClick={closeMenu}>Hem</Link></li>
          <li><HashLink to="/#tjanster" onClick={closeMenu}>Tjänster</HashLink></li>
          <li><Link to="/kontakt" onClick={closeMenu}>Kontakt</Link></li>
        </ul>
        <div
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={menuOpen ? styles.open : ''}></span>
          <span className={menuOpen ? styles.open : ''}></span>
          <span className={menuOpen ? styles.open : ''}></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
