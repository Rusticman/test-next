import React from 'react';
import Head from 'next/head';
import Header from '../../layout/Header';
import Page from '../../layout/Page';
import Hero from './Hero';
import Blocks from './Blocks';

class Partners extends React.Component {
  static async getInitialProps({ query }) {
    return {
      partners: await Content.find({ parent: query.id}),
    };
  }

  render() {
    const { title, partners } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
        </Head>
        <Header transparent offsetTop={10} />
        <Hero
          scrollTo={500}
          h1={title}
          h2="Who we work with"
          image="//cdn.checkd.media/images/bq5a0ki6-lg.jpg"
        />
        <Blocks partners={partners} />
      </React.Fragment>
    );
  }
}

export default Page(Partners);
