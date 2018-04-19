import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';
import Heading from '../../../layout/Heading';
import Container from '../../../layout/Container';

import styles from './styles.less';

function Hero({ title, description }) {

  return (
    <Container className={styles.hero}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Heading>{title}</Heading>
    </Container>
  );
}

function mapStateToProps({ query }) {
  return {
    title: idx(query, q => q.meta.title) || '',
  };
}

export default connect(mapStateToProps)(Hero);
