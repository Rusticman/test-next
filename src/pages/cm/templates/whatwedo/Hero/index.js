import React from 'react';

import Container from '../../../layout/Container';
import styles from './styles.less';

function Hero() {
  return (
    <Container>
      <div className={styles.hero}>
        <div>
          <img src="https://cdn.checkd.media/illustrations/news.svg" alt="What we do" />
        </div>
        <div>
          <h1>What we do</h1>
          <p>Content goes here</p>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
