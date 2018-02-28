import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.less';

function Hero({ image, headline, description }) {
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className={styles.mask} />
      <div className={styles.overlay}>
        <h1>{headline}</h1>
        {!!description && (<h2>{description}</h2>)}
      </div>
    </div>
  );
}

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Hero.defaultProps = {
  description: '',
};

export default Hero;
