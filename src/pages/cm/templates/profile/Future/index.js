import React from 'react';
import { connect } from 'react-redux';
import idx from 'idx';
import Container from '../../../layout/Container';
import styles from './styles.less';

function Future({ future }) {
  return (
    <Container>
      <div className={styles.future}>
        <h3>Future @ Checkd Media</h3>
        <div>{future}</div>
      </div>
    </Container>
  );
}

function mapStateToProps({ query }) {
  return {
    future: idx(query, q => q.meta.block_future) || '',
  };
}

export default connect(mapStateToProps)(Future);
