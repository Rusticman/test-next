import React from 'react';
import Head from 'next/head';

import Page from '../layout/Page';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

function NotFound() {
  return (
    <React.Fragment>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <Header />
      <div>404 - Page Not Found</div>
      <Footer />
    </React.Fragment>
  );
}

export default Page(NotFound);
