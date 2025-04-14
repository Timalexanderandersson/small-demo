import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/nofound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.icon}>🔨</div>
        <h1 className={styles.title}>404</h1>
        <p className={styles.message}>Ojdå! Den här sidan verkar försvunnit.</p>
        <p className={styles.subtext}>Men du kan alltid ta dig hem igen.</p>
        <Link to="/" className={styles.button}>
          Tillbaka till startsidan
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
