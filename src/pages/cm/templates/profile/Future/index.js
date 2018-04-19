import React from 'react';
import { connect } from 'react-redux';
import idx from 'idx';
import Container from '../../../layout/Container';
import Heading from '../../../layout/Heading';
import styles from './styles.less';

function Future({ future }) {
  return (
    <Container className={styles.content}>
      <div className={styles.future}>
        <Heading h1={false}>Future @ Checkd Media</Heading>
        <div className={styles.info}>{future}</div>
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
