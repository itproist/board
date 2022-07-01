import React from 'react';
import styles from './Footer.module.scss';
import logo from '../../../assets/img/logo.png';
import line from '../../../assets/img/line.png';
import Picture from '../Picture';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_left}>
        <div>
          <Picture src={logo} alt="logo" />
        </div>
        <Picture src={line} alt="logo" />
        <p className={styles.footer_text}>Доска объявлений</p>
      </div>
      <p className={styles.footer_right}>© ООО «Доска диджитал», 2022</p>
    </footer>
  );
};

export default Footer;
