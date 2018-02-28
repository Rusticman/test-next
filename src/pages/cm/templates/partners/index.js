import React from 'react';
import Head from 'next/head';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Page from '../../layout/Page';
import Hero from '../../layout/Hero';
import Blocks from './Blocks';

class Partners extends React.Component {
  static async getInitialProps({ query }) {
    return {
      subpartners: await Content.find({ parent: query.id }),
    };
  }

  render() {
    const { partners, subpartners } = this.props;
    const { title } = partners;

    console.log(title);

    return (
      <React.Fragment>
        <Head>
          <title>{title}</title>
        </Head>
        <Header transparent offsetTop={10} />
        <Hero
          headline={title}
          image="//cdn.checkd.media/images/bq5a0ki6-lg.jpg"
        />
        <Blocks partners={subpartners} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Page(Partners);
