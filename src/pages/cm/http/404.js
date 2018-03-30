import React from 'react';
import Head from 'next/head';

import Page from '../layout/Page';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import styles from './styles.less';

function NotFound() {
  return (
    <React.Fragment>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <div>404</div>
        <div>Page not found</div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Page(NotFound);
