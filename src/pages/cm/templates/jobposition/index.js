import React, { Component } from 'react';
import Head from 'next/head';
import { connect } from 'react-redux';
import idx from 'idx';
import Hero from './Hero';
import Skills from './Skills';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Page from '../../layout/Page';

function JobPosition({ title, description }) {
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
      <Skills />
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

export default Page(connect(mapStateToProps)(JobPosition));
