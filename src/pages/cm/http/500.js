import React from 'react';
import Head from 'next/head';

import Page from '../layout/Page';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import styles from './styles.less';

function ServerError() {
  return (
    <React.Fragment>
      <Head>
        <title>Server Error</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <div>500</div>
        <div>Internal Server Error</div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Page(ServerError);
