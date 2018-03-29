import React, { Component } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';
import Hero from './Hero';
import Questions from './Questions';
import Future from './Future';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Page from '../../layout/Page';

function Profile({ title, description }) {
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
      <Questions />
      <Future />
      <Footer />
    </React.Fragment>
  );
};

function mapStateToProps({ query }) {
  return {
    title: idx(query, q => q.meta.title) || '',
    description: idx(query, q => q.meta.description) || '',
  };
}

export default Page(connect(mapStateToProps)(Profile));
