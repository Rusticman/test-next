import React from 'react';
import { connect } from 'react-redux';
import idx from 'idx';
import Container from '../../../layout/Container';
import styles from './styles.less';

function Hero({ headline, secondary }) {
  return (
    <Container>
      <div className={styles.hero}>
        <div>
          <img src="https://cdn.checkd.media/illustrations/about.svg" alt="About Us" />
        </div>
        <div>
          <h1>{headline}</h1>
          <p>{secondary}</p>
        </div>
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
