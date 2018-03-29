import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';
import Container from '../../../layout/Container';

import styles from './styles.less';

function Hero({ title, headline, secondary, description }) {

  return (
    <Container className={styles.hero}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1>{title}</h1>
      <h2>{headline}</h2>
      <h3>{secondary}</h3>
    </Container>
  );
}

function mapStateToProps({ query }) {
  return {
    title: idx(query, q => q.meta.title) || '',
    headline: idx(query, q => q.meta.headline) || '',
    secondary: idx(query, q => q.meta.secondary) || '',
    description: idx(query, q => q.meta.description) || '',
  };
}

export default connect(mapStateToProps)(Hero);
