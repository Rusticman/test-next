import React from 'react';

import styles from './styles.less';
import Container from '../Container';



function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      {!!children && (
        <Container>
          {children}
          <hr />
        </Container>
      )}
      <Container className={styles.sections}>
        <div>
          <h4>Menu</h4>
          <ul>
            <li>
              <a href="/">Homepage</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/partners">Partners</a>
            </li>
            <li>
              <a href="/what-we-do">What we do</a>
            </li>
            <li>
              <a href="/join">Join us</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Address</h4>
          <ul>
            <li>
              <a href="mailto:hello@checkd.media">
                hello@checkd.media
              </a>
            </li>
            <li>60 Fountain Street</li>
            <li>1st Floor</li>
            <li>Manchester</li>
            <li>M2 2FE</li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
        </div>
      </Container>
      <Container className={styles.copy}>
        &copy; 2017-2018 Checkd Media
      </Container>
    </footer>
  );
}

export default Footer;
