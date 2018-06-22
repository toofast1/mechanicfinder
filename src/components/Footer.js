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
      <div>
        <div className={styles.newsletter}>
          <p>Vreți să primiți ofertele noastre? Aboneaza-te la newsletter-ul nostru!</p>
          <div className={styles["newsletter-form"]}> 
            <input type="text" placeholder="Adresa email" />
            <button>Abonare</button>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.secondary}>
      <ul className={styles.appendix}>
        <li>Termeni si Conditii</li>
        <li>Politica de Confidentialitate</li>
		<li>Contact</li>
      </ul>
      <h2 className={styles.logo}>Mecanici Alfa Romeo Romania</h2>
      <div className={styles.copyrights}>
        Copyright &copy; Mechanic Finder 2018. Toate drepturile rezervate.
      </div>
    </div>
  </footer>
);

export default Footer;