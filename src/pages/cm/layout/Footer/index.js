import React from 'react';

import Icon from '../../../../components/Icon/envelope';
import Facebook from '../../../../components/Icon/facebook';
import Twitter from '../../../../components/Icon/twitter';
import Instagram from '../../../../components/Icon/instagram';
import LinkedIn from '../../../../components/Icon/linkedin';

import styles from './styles.less';
import Container from '../Container';
import Subscribe from '../Subscribe';

function Footer({ subscribe }) {
  return (
    <footer className={styles.footer}>
      {subscribe && (
        <Container>
          <Subscribe />
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
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Address</h4>
          <ul>
            <li>
              <a href="mailto:hello@checkd.media">hello@checkd.media</a>
            </li>
            <li>60 Fountain Street</li>
            <li>1st Floor</li>
            <li>Manchester</li>
            <li>M2 2FE</li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/checkdMedia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/checkdmedia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/CheckdMedia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter /> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/checkd-media/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn /> Linkedin
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className={styles.copy}>
        &copy; 2017-2018 Checkd Media
      </Container>
    </footer>
  );
}

Footer.defaultProps = {
  subscribe: true,
};

export default Footer;
