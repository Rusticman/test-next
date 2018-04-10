import React from 'react';
import { connect } from 'react-redux';
import idx from 'idx';
import styles from './styles.less';

function Hero({ headline, secondary }) {
  return (
    <div className={styles.hero}>
      <div>
        <h1>{headline}</h1>
        <h4>{secondary}</h4>
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
