import React from 'react';
import { connect } from 'react-redux';
import idx from 'idx';
import Slider from './Slider';
import styles from './styles.less';

function Hero({ headline, secondary, jobs }) {
  return (
    <div className={styles.container}>
      <div />
      <div className={styles.hero}>
        <div>
          <h1>{headline}</h1>
          <h4>{secondary}</h4>
        </div>
        <div>
          <Slider jobs={jobs} />
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ query }) {
  return {
    headline: idx(query, q => q.meta.headline) || '',
    secondary: idx(query, q => q.meta.secondary) || '',
  };
}

export default connect(mapStateToProps)(Hero);
