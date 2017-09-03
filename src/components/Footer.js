import React from 'react';

import Separator from './Separator';

import { FaFacebookOfficial, FaTwitter, FaGooglePlus, FaInstagram,
         FaYoutubePlay, FaPinterest, FaLinkedin  } from 'react-icons/fa';

import styles from './Footer.css';

const PrimarySection = props => (
  <div className={styles["primary-section"]}>
    <h4 style={{ marginBottom: 0 }}>{props.title}</h4>
    <Separator marginTop={5} color="#37454d" width={2} />
    {props.children}
  </div>
);

const Footer = props => (
  <footer className={styles.root}>
    <div className={styles.primary}>
      <div className={styles.newsletter}>
        <p>Quieres recibir nuestras ofertas? Suscribete a nuestro newsletter!</p>
        <div className={styles["newsletter-form"]}> 
          <input type="text" placeholder="Correo Electronico" />
          <button>Suscribete</button>
        </div>
      </div>
      <PrimarySection title="Nuestra Empresa">
        <p>Empresa</p>
        <p>Trabajos</p>
        <p>Carreras</p>
        <p>Prensa</p>
        <p>Inversionistas</p>
      </PrimarySection>
      <PrimarySection title="Contactanos">
        <div className={styles.social}>
          <FaFacebookOfficial />
          <FaTwitter />
          <FaInstagram />
          <FaGooglePlus />
          <FaYoutubePlay />
          <FaPinterest />
          <FaLinkedin />
        </div>
      </PrimarySection>
    </div>
    <div className={styles.secondary}>
    </div>
  </footer>
);

export default Footer;