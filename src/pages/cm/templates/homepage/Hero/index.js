import React from 'react';

import animateScrollTo from 'animated-scroll-to';
import Container from '../../../layout/Container';
import ArrowIcon from '../../../../../components/Icon/double-arrow';
import styles from './styles.less';

function Hero({ h1, h2, image, scrollTo }) {
  return (
    <React.Fragment>
      <div className={styles.heroContainer}>
        <div
          className={styles.hero}
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
      </div>
      <div className={styles.container}>
        <Container>
          <h1>{h1}</h1>
          <h2>{h2}</h2>
          <div className={styles.more}>
            <p>Find out more</p>
            <div
              className={styles.arrows}
              role="button"
              aria-label={'Find out more'}
              onClick={() => animateScrollTo(scrollTo)}
            >
              <ArrowIcon />
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Hero;
