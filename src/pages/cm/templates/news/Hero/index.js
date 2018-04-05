import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';
import Container from '../../../layout/Container';

import styles from './styles.less';

function Hero({ title, description }) {

  return (
    <Container className={styles.hero}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1>{title}</h1>
    </Container>
  );
}

function mapStateToProps({ query }) {
  return {
    title: idx(query, q => q.meta.title) || '',
  };
}

export default connect(mapStateToProps)(Hero);
