import React from 'react';

import Container from '../../../layout/Container';
import styles from './styles.less';

function Hero() {
  return (
    <Container>
      <div className={styles.hero}>
        <h1>Our Partners</h1>
        <p>Description of our partners importance goes here and how we'd like you to join us etc.</p>
      </div>
    </Container>
  );
}

export default Hero;
