import React from 'react';
import Head from 'next/head';

import Page from '../../layout/Page';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

import Hero from './Hero';
import Stats from './Stats';
import Blocks from './Blocks';

function Homepage({ getParam }) {
  return (
    <React.Fragment>
      <Head>
        <title>{getParam(query => query.meta.title)}</title>
        <meta name={'description'} content={getParam(query => query.meta.description)} />
      </Head>
      <Header />
      <Hero />
      <Stats />
      <Blocks />
      <Footer />
    </React.Fragment>
  );
}

export default Page(Homepage);
