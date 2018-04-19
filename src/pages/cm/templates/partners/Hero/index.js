import React from 'react';
import { connect } from 'react-redux';
import idx from 'idx';
import Container from '../../../layout/Container';
import Heading from '../../../layout/Heading';
import styles from './styles.less';

function Hero({ headline, secondary }) {
  return (
    <Container>
      <div className={styles.hero}>
        <Heading>{headline}</Heading>
        <p>{secondary}</p>
      </div>
    </Container>
  );
}

function mapStateToProps({ query }) {
  return {
    headline: idx(query, q => q.meta.headline) || '',
    secondary: idx(query, q => q.meta.secondary) || '',
  };
}

export default connect(mapStateToProps)(Hero);
