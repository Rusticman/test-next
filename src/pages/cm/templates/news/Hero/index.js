import React from 'react';

import Container from '../../../layout/Container';

import styles from './styles.less';

function Hero() {
  return (
    <Container className={styles.hero}>
      <h1>CheckdMedia News</h1>
      <h2>Some title about our news goes here</h2>
    </Container>
  );
}

export default Hero;
