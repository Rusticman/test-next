import React from 'react';

import styles from './styles.less';
import Container from '../Container';


function Footer({ children }) {
  return (
    <div className={styles.footer}>
      {!!children && (
        <React.Fragment>
          <Container>
            {children}
          </Container>
          <hr />
        </React.Fragment>
      )}
      <Container className={styles.sections}>
        <div>
          <h4>Menu</h4>
          <ul>
            <li>Linky McLink</li>
            <li>Linky McLink</li>
            <li>Linky McLink</li>
            <li>Linky McLink</li>
            <li>Linky McLink</li>
          </ul>
        </div>
        <div>
          <h4>Address</h4>
          <ul>
            <li>hello@checkd.media</li>
            <li>60 Fountain Street</li>
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
    </div>
  );
}

export default Footer;
