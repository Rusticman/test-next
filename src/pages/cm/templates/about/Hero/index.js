import React from 'react';
import { connect } from 'react-redux';
import idx from 'idx';
import Container from '../../../layout/Container';
import styles from './styles.less';

function Hero({ headline }) {
  return (
    <Container>
      <div className={styles.hero}>
        <div>
          <img src="https://cdn.checkd.media/illustrations/about.svg" alt="About Us" />
        </div>
        <div>
          <h1>About Us</h1>
          <p>{headline}</p>
        </div>
      </div>
    </Container>
  );
}

function mapStateToProps({ query }) {
  return {
    headline: idx(query, q => q.meta.headline) || '',
  };
}

export default connect(mapStateToProps)(Hero);
