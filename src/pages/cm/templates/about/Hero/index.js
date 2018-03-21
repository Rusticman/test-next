import React from 'react';

import Container from '../../../layout/Container';
import styles from './styles.less';

function Hero() {
  return (
    <Container>
      <div className={styles.hero}>
        <div>
          <img src="https://cdn.checkd.media/illustrations/about.svg" alt="About Us" />
        </div>
        <div>
          <h1>About Us</h1>
          <p>Blah blah blah</p>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
