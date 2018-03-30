import React from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';

import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Page from '../../layout/Page';

import Hero from './Hero';

function Partner({ title, description }) {
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
      <Footer />
    </React.Fragment>
  );
}

function mapStateToProps({ query }) {
  return {
    title: idx(query, q => q.meta.title) || '',
    description: idx(query, q => q.meta.description) || '',
  };
}

export default Page(connect(mapStateToProps)(Partner));

