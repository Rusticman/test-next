import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';

import Page from '../../layout/Page';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';

import Hero from './Hero';
import Stats from './Stats';
import Blocks from './Blocks';
import Subscribe from './Subscribe';

function Homepage({ title, description }) {
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
      </Head>
      <Header />
      <Hero />
      <Stats />
      <Blocks />
      <Footer>
        <Subscribe />
      </Footer>
    </React.Fragment>
  );
}

function mapStateToProps({ query }) {
  console.log(query)
  return {
    title: idx(query, q => q.meta.title) || '',
    description: idx(query, q => q.meta.description) || '',
  };
}

export default Page(
  connect(mapStateToProps)(Homepage)
);
