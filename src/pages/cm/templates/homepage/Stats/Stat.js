import React from 'react';
import idx from 'idx';
import { connect } from 'react-redux';
import styles from './styles.less';

function Stat({ value, description, color = '#000' }) {
  return (
    <div className={styles.stat}>
      <div style={{ color }}>{value}</div>
      <p>{description}</p>
    </div>
  );
}

function mapStateToProps({ query }, { block }) {
  return {
    value: idx(query, q => q.meta[block].value) || '',
    description: idx(query, q => q.meta[block].description) || '',
  };
}

export default connect(mapStateToProps)(Stat);
