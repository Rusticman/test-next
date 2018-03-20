import React from 'react';

import Container from '../../../layout/Container';

import styles from './styles.less';

function Hero() {
  return (
    <Container className={styles.hero}>
      <h1>CheckdMedia News</h1>
      <h2>Subscribe now to get updates on the latest CheckdMedia news</h2>
    </Container>
  );
}

export default Hero;
