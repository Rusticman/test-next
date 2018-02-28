import React from 'react';
import Head from 'next/head';

import Page from '../../layout/Page';
import Header from '../../layout/Header';

import Hero from './Hero';
import About from './About';
import Partners from './Partners';
import Blocks from './Blocks';
import Footer from '../../layout/Footer';

class Homepage extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
        </Head>
        <Header transparent offsetTop={10} />
        <Hero
          scrollTo={500}
          h1="A unique social marketing company"
          h2="Established communities await your brand"
          image="//cdn.checkd.media/images/bq5a0ki6-lg.jpg"
        />
        <Partners />
        <About />
        <Blocks />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Page(Homepage);
