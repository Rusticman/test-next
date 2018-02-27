import React from 'react';
import styles from './styles.less';

function Partners() {
  return (
    <div className={styles.container}>
      <a href="/partners">
        <img
          className={styles.image}
          src="http://cdn.checkd.media/images/ladbrokes-1.png"
          alt="ladbrokes logo"
        />
      </a>
      <a href="/partners">
        <img
          className={styles.image}
          src="http://cdn.checkd.media/images/betfair-1.png"
          alt="betfair logo"
        />
      </a>
      <a href="/partners">
        <img
          className={styles.image}
          src="http://cdn.checkd.media/images/sky-bet.png"
          alt="sky bet logo"
        />
      </a>
      <a href="/partners">
        <img
          className={styles.image}
          src="http://cdn.checkd.media/images/paddy-power.png"
          alt="paddy power logo"
        />
      </a>
      <a href="/partners">
        <img
          className={styles.image}
          src="http://cdn.checkd.media/images/betbright.png"
          alt="betbright logo"
        />
      </a>
      <a href="/partners">
        <img
          className={styles.image}
          src="http://cdn.checkd.media/images/coral-2.png"
          alt="coral logo"
        />
      </a>
    </div>
  );
}

export default Partners;
